import { useState, useMemo, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, Tab, Snackbar } from "@mui/material";
import { Copy, Heart, Sparkles, Wand2, Star, Gamepad } from "lucide-react";
import {
  characterMaps,
  superscript,
  leftSymbols,
  rightSymbols,
  prefixes,
  suffixes,
} from "../../utils/characterMaps";

// New Interactive Preview Card Component
const PreviewCard = ({ nickname, style, theme }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600 transform transition-all duration-300 hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-game-pattern opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center flex-col p-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-white text-2xl font-bold mb-4"
        >
          {style.text || nickname}
        </motion.div>
        <div className="flex gap-2">
          {["🎮", "🏆", "⚔️", "🎯"].map((emoji, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// New Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Special Effects Component
const SpecialEffects = ({ nickname }) => {
  const letters = nickname.split("");

  return (
    <div className="flex justify-center mb-8">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

// Achievement System
const Achievement = ({ title, description, icon, unlocked }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-4 rounded-lg ${
        unlocked
          ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
          : "bg-gray-200"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced NicknameCard Component
const NicknameCard = ({
  style,
  copyToClipboard,
  toggleFavorite,
  isFavorite,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-500/20 backdrop-blur-sm"
    >
      <div className="p-4 sm:p-6">
        {/* Card Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Gamepad className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400">Style</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => copyToClipboard(style.text)}
              className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 transition-all"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleFavorite(style.text)}
              className={`p-2 rounded-lg transition-all ${
                isFavorite
                  ? "bg-pink-500/20 text-pink-400"
                  : "bg-purple-500/10 hover:bg-purple-500/20 text-purple-400"
              }`}
            >
              <Heart
                className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Nickname Display */}
        <div className="relative group cursor-pointer">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 break-all">
            <p className="text-center text-lg sm:text-xl font-semibold text-white select-all">
              {style.text}
            </p>
          </div>
          <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 rounded-lg transition-all" />
        </div>

        {/* Card Footer */}
        <div className="mt-4 flex justify-between items-center">
          <div className="flex gap-1">
            {["⭐", "🎮", "🎯"].map((emoji, index) => (
              <span key={index} className="text-sm opacity-70">
                {emoji}
              </span>
            ))}
          </div>
          <span className="text-xs text-purple-400/70">Click to copy</span>
        </div>
      </div>
    </motion.div>
  );
};

// Add these arrays at the top with your other imports
const predefinedAnimeNames = [
  "Naruto",
  "Sasuke",
  "Goku",
  "Luffy",
  "Ichigo",
  "Tanjiro",
  "Eren",
  "Levi",
  "Zoro",
  "Itachi",
  "Kakashi",
  "Deku",
  "Saitama",
  "Light",
  "L",
  "Mikasa",
  "Hinata",
  "Sakura",
  "Madara",
  "Pain",
];

// Add this component for Anime Names
const AnimeNameCard = ({ name, onSelect }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-500/20 backdrop-blur-sm cursor-pointer"
      onClick={() => onSelect(name)}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-purple-400">Anime Character</span>
          <Star className="w-4 h-4 text-yellow-500" />
        </div>
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-3">
          <p className="text-center text-lg font-semibold text-white">{name}</p>
        </div>
        <div className="mt-3 flex justify-center gap-2">
          <span className="text-xs text-purple-400/70">Click to use</span>
        </div>
      </div>
    </motion.div>
  );
};

export default function FreeFireNickName() {
  const [nickname, setNickname] = useState("Naruto");
  const [favorites, setFavorites] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [currentStyle, setCurrentStyle] = useState({ text: "" });
  const [achievements, setAchievements] = useState({
    creator: false,
    collector: false,
    artist: false,
  });
  const [showConfetti, setShowConfetti] = useState(false);

  // Define superscriptMap first
  const superscriptMap = {
    NP: "🇳🇵",
    FF: "ᶠᶠ",
    np: "ⁿᵖ",
    ff: "ᶠᶠ",
  };

  // Define generateStyledNicknames first
  const generateStyledNicknames = useCallback((base) => {
    if (!base) return [];
    return Array.from({ length: 50 }, (_, i) => {
      const styleKey =
        Object.keys(characterMaps)[i % Object.keys(characterMaps).length];
      const styleMap = characterMaps[styleKey];
      const leftDecor = leftSymbols[i % leftSymbols.length];
      const rightDecor = rightSymbols[i % rightSymbols.length];

      let processedText = base
        .toLowerCase()
        .split("")
        .map((char) =>
          "abcdefghijklmnopqrstuvwxyz".includes(char)
            ? styleMap["abcdefghijklmnopqrstuvwxyz".indexOf(char)]
            : char
        )
        .join("");

      if (i % 5 === 0) {
        processedText = `${processedText}${superscriptMap.FF}`;
      } else if (i % 5 === 1) {
        processedText = `${superscriptMap.NP}${processedText}`;
      } else if (i % 5 === 2) {
        processedText = `${processedText}${superscriptMap.np}`;
      } else if (i % 5 === 3) {
        processedText = `${processedText}${superscriptMap.ff}`;
      }

      return { text: `${leftDecor}${processedText}${rightDecor}` };
    });
  }, []);

  // Then use it in useMemo
  const styledNicknames = useMemo(() => {
    return generateStyledNicknames(nickname);
  }, [nickname, generateStyledNicknames]);

  // Define generateAnimeStyles after
  const generateAnimeStyles = useCallback((name) => {
    if (!name) return [];
    return Array.from({ length: 15 }, (_, i) => {
      const styleKey =
        Object.keys(characterMaps)[i % Object.keys(characterMaps).length];
      const styleMap = characterMaps[styleKey];
      const leftDecor = leftSymbols[i % leftSymbols.length];
      const rightDecor = rightSymbols[i % rightSymbols.length];
      const prefix = prefixes[i % prefixes.length];
      const suffix = suffixes[i % suffixes.length];

      let processedText = name
        .toLowerCase()
        .split("")
        .map((char) =>
          "abcdefghijklmnopqrstuvwxyz".includes(char)
            ? styleMap["abcdefghijklmnopqrstuvwxyz".indexOf(char)]
            : char
        )
        .join("");

      if (i % 3 === 0) {
        processedText = `${processedText}${superscriptMap.FF}`;
      } else if (i % 3 === 1) {
        processedText = `${processedText}${superscriptMap.NP}`;
      }

      return {
        text: `${prefix}${leftDecor}${processedText}${rightDecor}${suffix}`,
        originalName: name,
      };
    });
  }, []);

  // Trigger confetti effect
  const triggerConfetti = () => {
    // Create confetti effect using CSS
    const container = document.createElement("div");
    container.className = "confetti-container";
    document.body.appendChild(container);

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDelay = Math.random() * 3 + "s";
      container.appendChild(confetti);
    }

    setTimeout(() => {
      container.remove();
    }, 3000);
  };

  // Achievement handler
  const checkAchievements = useCallback(() => {
    if (favorites.length >= 10 && !achievements.collector) {
      setAchievements((prev) => ({ ...prev, collector: true }));
      triggerConfetti();
    }
    // Add more achievement conditions
  }, [favorites.length, achievements]);

  useEffect(() => {
    checkAchievements();
  }, [checkAchievements]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (styledNicknames.length > 0) {
      setCurrentStyle(styledNicknames[0]);
    }
  }, [styledNicknames]);

  const copyToClipboard = useCallback((text) => {
    navigator.clipboard.writeText(text).then(() => {
      setSnackbarMessage("Copied to clipboard!");
    });
  }, []);

  const toggleFavorite = useCallback((text) => {
    setFavorites((prev) =>
      prev.includes(text) ? prev.filter((t) => t !== text) : [...prev, text]
    );
  }, []);

  const styledAnimeNames = useMemo(() => {
    return predefinedAnimeNames.flatMap((name) =>
      generateStyledNicknames(name)
    );
  }, [generateStyledNicknames]);

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-[100px]">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            <Sparkles className="inline w-6 h-6 sm:w-8 sm:h-8 mr-2 text-purple-500" />
            Free Fire Nickname Generator
            <Sparkles className="inline w-6 h-6 sm:w-8 sm:h-8 ml-2 text-purple-500" />
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Create unique and stylish nicknames for Free Fire. Generate,
            customize, and save your favorite combinations.
          </p>
        </motion.div>

        {/* Input Section */}
        <div className="max-w-xl mx-auto mb-8 px-4">
          <div className="relative">
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Enter your nickname..."
              className="w-full px-6 py-4 text-base sm:text-lg rounded-full border-2 border-purple-500/20 bg-black/50 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all shadow-sm hover:shadow-md hover:shadow-purple-500/10"
            />
            <Wand2 className="absolute right-6 top-1/2 transform -translate-y-1/2 text-purple-500" />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="bg-black/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-lg shadow-purple-500/10 p-4 sm:p-6">
          {/* Tabs */}
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            centered
            className="mb-6"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#a855f7",
                height: "3px",
                borderRadius: "3px",
              },
            }}
            sx={{
              "& .MuiTab-root": {
                color: "rgba(255,255,255,0.7)",
                fontSize: { xs: "0.875rem", sm: "1rem" },
                minHeight: { xs: "48px", sm: "56px" },
                "&.Mui-selected": {
                  color: "#a855f7",
                },
              },
            }}
          >
            <Tab
              label={
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Generated
                </span>
              }
            />
            <Tab
              label={
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Favorites
                </span>
              }
            />
            <Tab
              label={
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Anime
                </span>
              }
            />
          </Tabs>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {tabValue === 0 &&
              styledNicknames.map((style) => (
                <NicknameCard
                  key={style.text}
                  style={style}
                  copyToClipboard={copyToClipboard}
                  toggleFavorite={toggleFavorite}
                  isFavorite={favorites.includes(style.text)}
                />
              ))}

            {tabValue === 1 &&
              (favorites.length > 0 ? (
                favorites.map((fav) => (
                  <NicknameCard
                    key={fav}
                    style={{ text: fav }}
                    copyToClipboard={copyToClipboard}
                    toggleFavorite={toggleFavorite}
                    isFavorite={true}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <Heart className="w-12 h-12 mx-auto text-purple-500/30 mb-4" />
                  <p className="text-gray-400 text-lg">
                    No favorites yet. Start adding some!
                  </p>
                </div>
              ))}

            {tabValue === 2 && (
              <div className="col-span-full">
                {/* Quick Select Anime Names */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">
                    Popular Anime Characters
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {predefinedAnimeNames.map((name) => (
                      <motion.button
                        key={name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setNickname(name)}
                        className="px-4 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 text-sm font-medium transition-all"
                      >
                        {name}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Styled Versions */}
                {nickname && (
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">
                      Styled Versions
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {generateAnimeStyles(nickname).map((style, index) => (
                        <NicknameCard
                          key={index}
                          style={style}
                          copyToClipboard={copyToClipboard}
                          toggleFavorite={toggleFavorite}
                          isFavorite={favorites.includes(style.text)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Featured Characters */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">
                    Featured Characters
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {predefinedAnimeNames.slice(0, 6).map((name) => (
                      <AnimeNameCard
                        key={name}
                        name={name}
                        onSelect={(name) => setNickname(name)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Snackbar */}
      <Snackbar
        open={!!snackbarMessage}
        autoHideDuration={2000}
        onClose={() => setSnackbarMessage("")}
        message={snackbarMessage}
        className="!bottom-4 !mb-safe"
        ContentProps={{
          className: "bg-purple-500 font-medium rounded-full px-6 py-2",
        }}
      />
    </div>
  );
}
