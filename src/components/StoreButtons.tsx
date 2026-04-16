const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL ?? "#";
const GOOGLE_PLAY_URL = process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ?? "#";

interface Props {
  className?: string;
}

export default function StoreButtons({ className = "" }: Props) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        className="flex items-center gap-2 text-white text-sm font-bold transition-opacity hover:opacity-80"
        style={{
          background: "#1c1917",
          borderRadius: "10px",
          padding: "10px 18px",
        }}
      >
        <span className="text-base">🍎</span>
        App Store
      </a>
      <a
        href={GOOGLE_PLAY_URL}
        className="flex items-center gap-2 text-white text-sm font-bold transition-opacity hover:opacity-80"
        style={{
          background: "#1c1917",
          borderRadius: "10px",
          padding: "10px 18px",
        }}
      >
        <span className="text-base">▶</span>
        Google Play
      </a>
    </div>
  );
}
