import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Settings() {
    const [settings, setSettings] = useState(() => {
        const savedSettings = JSON.parse(localStorage.getItem("user-settings"));
        return savedSettings || {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--primary-color": "rgb(255, 0, 86)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757",
            "--font-size": "16px",
            "--animation-speed": 1
        };
    });

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const [primaryColor, setPrimaryColor] = useState(() => {
        return JSON.parse(localStorage.getItem("primaryColor")) || 0;
    });

    const [fontSize, setFontSize] = useState(() => {
        return JSON.parse(localStorage.getItem("fontSize")) || 1;
    });

    const [animationSpeed, setAnimationSpeed] = useState(() => {
        return JSON.parse(localStorage.getItem("animationSpeed")) || 1;
    });

    useEffect(() => {
        const root = document.documentElement;
        for (let key in settings) {
            root.style.setProperty(key, settings[key]);
        }
        localStorage.setItem("user-settings", JSON.stringify(settings));
        localStorage.setItem("theme", theme);
        localStorage.setItem("primaryColor", JSON.stringify(primaryColor));
        localStorage.setItem("fontSize", JSON.stringify(fontSize));
        localStorage.setItem("animationSpeed", JSON.stringify(animationSpeed));
    }, [settings, theme, primaryColor, fontSize, animationSpeed]);

    const themes = [
        {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757"
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea",
        }
    ];

    function changeTheme(i) {
        const _theme = { ...themes[i] };
        setTheme(i === 0 ? "light" : "dark");
        let _settings = { ...settings };
        for (let key in _theme) {
            _settings[key] = _theme[key];
        }
        setSettings(_settings);
    }

    function changeColor(i) {
        const _color = primaryColors[i];
        let _settings = { ...settings };
        _settings["--primary-color"] = _color;
        setPrimaryColor(i);
        setSettings(_settings);
    }

    function changeFontSize(i) {
        const _size = fontSizes[i];
        let _settings = { ...settings };
        _settings["--font-size"] = _size.value;
        setFontSize(i);
        setSettings(_settings);
    }

    function changeAnimationSpeed(i) {
        const _speed = animationSpeeds[i];
        let _settings = { ...settings };
        _settings["--animation-speed"] = _speed.value;
        setAnimationSpeed(i);
        setSettings(_settings);
    }

    const primaryColors = [
        "rgb(255, 0, 86)",
        "rgb(255, 208, 0)",
        "rgb(30, 136, 229)",
        "rgb(82, 183, 136)", 
        "rgb(171, 129, 205)"
    ];

    const fontSizes = [
        {
            title: "Small",
            value: "12px"
        },
        {
            title: "Medium",
            value: "16px"
        },
        {
            title: "Large",
            value: "20px"
        }
    ];

    const animationSpeeds = [
        {
            title: "Slow",
            value: "2"
        },
        {
            title: "Medium",
            value: "1"
        },
        {
            title: "Fast",
            value: ".5"
        }
    ];

    return (
        <div>
            <div className="section d-block">
                <h2>Primary Theme</h2>
                <div className="options-container">
                    <div className="option light" onClick={() => changeTheme(0)}>
                        {theme === "light" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                    <div className="option dark" onClick={() => changeTheme(1)}>
                        {theme === "dark" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="section d-block">
                <h2>Preferred Color</h2>
                <div className="options-container">
                    {primaryColors.map((color, index) => (
                        <div key={index} className="option light" style={{ backgroundColor: color }} onClick={() => changeColor(index)}>
                            {primaryColor === index && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="section d-block">
                <h2>Font Size</h2>
                <div className="options-container">
                    {fontSizes.map((size, index) => (
                        <button key={index} className="btn" onClick={() => changeFontSize(index)}>
                            {size.title}
                            {fontSize === index && <span><FontAwesomeIcon icon={faCheck} /></span>}
                        </button>
                    ))}
                </div>
            </div>

            <div className="section d-block">
                <h2>Animation Speed</h2>
                <div className="options-container">
                    {animationSpeeds.map((speed, index) => (
                        <button key={index} className="btn" onClick={() => changeAnimationSpeed(index)}>
                            {speed.title}
                            {animationSpeed === index && <span><FontAwesomeIcon icon={faCheck} /></span>}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
