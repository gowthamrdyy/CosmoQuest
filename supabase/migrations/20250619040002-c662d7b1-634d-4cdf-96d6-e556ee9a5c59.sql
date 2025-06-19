
-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  astronaut_level TEXT DEFAULT 'Space Cadet',
  total_badges INTEGER DEFAULT 0,
  missions_completed INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create badges table
CREATE TABLE public.badges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  rarity TEXT NOT NULL DEFAULT 'Common',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create user_badges junction table
CREATE TABLE public.user_badges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  badge_id UUID REFERENCES public.badges NOT NULL,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, badge_id)
);

-- Create missions table
CREATE TABLE public.missions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  planet TEXT NOT NULL,
  difficulty TEXT NOT NULL DEFAULT 'Beginner',
  content TEXT,
  quiz_questions JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create user_missions table to track progress
CREATE TABLE public.user_missions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  mission_id UUID REFERENCES public.missions NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE,
  score INTEGER,
  status TEXT DEFAULT 'not_started',
  UNIQUE(user_id, mission_id)
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.missions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_missions ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Badges policies
CREATE POLICY "Badges are viewable by everyone" ON public.badges
  FOR SELECT USING (true);

-- User badges policies
CREATE POLICY "Users can view their own badges" ON public.user_badges
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can earn badges" ON public.user_badges
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Missions policies
CREATE POLICY "Missions are viewable by everyone" ON public.missions
  FOR SELECT USING (true);

-- User missions policies
CREATE POLICY "Users can view their own mission progress" ON public.user_missions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own mission progress" ON public.user_missions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can modify their own mission progress" ON public.user_missions
  FOR UPDATE USING (auth.uid() = user_id);

-- Insert initial badges
INSERT INTO public.badges (name, description, icon, rarity) VALUES
  ('Moon Explorer', 'Complete all lunar mission modules', '🌙', 'Common'),
  ('Gravity Genius', 'Master gravitational forces and orbital mechanics', '🌌', 'Rare'),
  ('Rocket Rider', 'Successfully launch 10 rocket simulations', '🚀', 'Epic'),
  ('Black Hole Scholar', 'Understand the mysteries of black holes and spacetime', '🕳️', 'Legendary'),
  ('Mars Pioneer', 'Explore the Red Planet and plan a Mars mission', '🔴', 'Epic'),
  ('Cosmic Commander', 'Achieve the highest rank in space exploration', '👨‍🚀', 'Mythic');

-- Insert initial missions
INSERT INTO public.missions (title, description, planet, difficulty, content, quiz_questions) VALUES
  ('Mercury Exploration', 'Learn about the closest planet to the Sun', 'Mercury', 'Beginner', 'Mercury is the smallest planet in our solar system and the closest to the Sun. It has extreme temperature variations and no atmosphere.', 
   '[{"question": "What is Mercury closest to?", "options": ["Earth", "Sun", "Mars", "Venus"], "correct": 1}]'),
  ('Mars Mission Planning', 'Understand what it takes to plan a mission to Mars', 'Mars', 'Intermediate', 'Mars is known as the Red Planet due to iron oxide on its surface. It has the largest volcano in the solar system, Olympus Mons.',
   '[{"question": "Why is Mars called the Red Planet?", "options": ["It is hot", "Iron oxide on surface", "It glows red", "Red rocks"], "correct": 1}]'),
  ('Black Hole Mysteries', 'Explore the fascinating world of black holes', 'Deep Space', 'Advanced', 'Black holes are regions of spacetime where gravity is so strong that nothing can escape, not even light.',
   '[{"question": "What cannot escape a black hole?", "options": ["Sound", "Light", "Heat", "Cold"], "correct": 1}]');

-- Function to update user profile stats
CREATE OR REPLACE FUNCTION update_user_stats()
RETURNS TRIGGER AS $$
BEGIN
  -- Update badge count and missions completed
  UPDATE public.profiles 
  SET 
    total_badges = (SELECT COUNT(*) FROM public.user_badges WHERE user_id = NEW.user_id),
    missions_completed = (SELECT COUNT(*) FROM public.user_missions WHERE user_id = NEW.user_id AND completed_at IS NOT NULL),
    updated_at = now()
  WHERE id = NEW.user_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Triggers to update stats
CREATE TRIGGER update_stats_on_badge_earned
  AFTER INSERT ON public.user_badges
  FOR EACH ROW EXECUTE FUNCTION update_user_stats();

CREATE TRIGGER update_stats_on_mission_completed
  AFTER UPDATE ON public.user_missions
  FOR EACH ROW EXECUTE FUNCTION update_user_stats();
