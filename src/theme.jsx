export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#1F2A40",  // أزرق مائل إلى الرمادي الداكن
            light: "#3A4A6B", // درجة متوسطة
            dark: "#141B2D",  // اللون الأساسي الداكن
          },
          secondary: {
            main: "#4C5C79",  // أزرق رمادي متوسط
            light: "#7A8CAA", // لون أفتح قليلًا
            dark: "#2C3A54",  // درجة أغمق من الأساسي
          },
          background: {
            default: "#F0F2F5", // خلفية فاتحة جدًا
            paper: "#DDE1E6",   // خلفية للأوراق قريبة من الأبيض الرمادي
          },
        }
      : {
          primary: {
            main: "#141B2D",  // اللون الأساسي الداكن
            light: "#1F2A40", // درجة متوسطة
            dark: "#0B111E",  // لون أكثر قتامة للخلفية
          },
          secondary: {
            main: "#2C3A54",  // أزرق رمادي غامق
            light: "#4C5C79", // درجة أفتح قليلاً
            dark: "#1A2437",  // لون داكن جدًا
          },
          background: {
            default: "#0A0F1A", // خلفية داكنة جدًا
            paper: "#141B2D",   // لون أغمق للورق
          },
        }),
  },
});
