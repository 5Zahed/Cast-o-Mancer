export const metadata = {
  title: "Cast-o-Mancer",
  openGraph: {
    title: "Cast-o-Mancer",
    images: ["https://cast-o-mancer.vercel.app/backgroun.png"],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://cast-o-mancer.vercel.app/backgroun.png",
    "fc:frame:post_url": "https://cast-o-mancer.vercel.app/api/frame",
    "fc:frame:button:1": "Cast",
  },
};

export default function FramePage() {
  return (
    <div style={{ color: "white", padding: 20 }}>
      cast-o-mancer loaded. this is the `/frame` endpoint.
    </div>
  );
}
