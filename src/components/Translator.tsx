import Button from "@mui/material/Button";

const TranslateBtn = ({ language, toggleLanguage }: { language: string; toggleLanguage: () => void }) => {
    return (
        <Button onClick={toggleLanguage} sx={{ color: "var(--color-text)" }}>
            {language === "en" ? "Spanish" : "Inglés"}
        </Button>
    );
};

export default TranslateBtn;
