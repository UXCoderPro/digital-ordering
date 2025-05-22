import React, { useEffect, useState, useRef } from "react";
import QRCode from "react-qr-code";
import logo from "../../assets/MyQr/brand.svg"; // adjust path to your logo
import { div } from "framer-motion/client";

const generateCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit
};

const QrView = () => {
  const [code, setCode] = useState(generateCode());
  const [countdown, setCountdown] = useState(120);
  const timerRef = useRef(null);

  const qrUrl = `https://www.google.com`;

  useEffect(() => {
    // Update QR code and reset countdown every 12 seconds
    timerRef.current = setInterval(() => {
      setCode(generateCode());
      setCountdown(120);
    }, 120000);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    // Countdown timer per second
    const countdownTimer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  return (
    <div className="w-4/5 h-96 px-5 py-4 border border-border border-solid rounded-xl bg-white flex gap-3 flex-col items-center justify-start">
      <div className="relative p-2">
        <QRCode
          value={qrUrl}
          size={200}
          bgColor="#FFFFFF"
          fgColor="#1E1E1E"
          style={{ height: "auto", maxWidth: "100%", width: "250px" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={logo} alt={logo} className="w-auto h-20 object-cover" />
        </div>
      </div>

      <p className="text-primary font-sfDisplay text-base font-semibold tracking-widest">
        {code}
      </p>

      {/* Countdown */}
      <p className="text-textLight text-xs font-medium font-sfText">
        Automaticaly Refresh in
        <span className="font-semibold text-primary"> {countdown} Seconds</span>
      </p>
    </div>
  );
};

export default QrView;
