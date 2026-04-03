import Image from "next/image";

const LINE_URL = "https://lin.ee/9eLdr6N";
const LINE_QR_URL =
  "https://qr-official.line.me/gs/M_633xxbjw_GW.png?oat_content=qr";

/* ─── ヒーローセクション ─── */
function HeroSection() {
  return (
    <section className="px-6 py-20 md:py-28 text-center max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
        LINEによる復習サポート
        <br />
        <span className="text-blue-accent">「ループ君」</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        授業の受けっぱなしはもったいない
      </p>
      <p className="text-gray-500 leading-relaxed max-w-xl mx-auto mb-10">
        ループ君は、お子さまの授業ノートやテキストの写真をLINEで送るだけで、
        最適な復習問題を配信。日々の学習を定着させる新しい復習サポートサービスです。
      </p>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-line-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.508.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
        LINE友だち追加
      </a>
    </section>
  );
}

/* ─── サービスフローセクション ─── */
const steps = [
  {
    icon: "📸",
    title: "写真を送る",
    desc: "授業ノートやテキストの写真をLINEで送信",
  },
  {
    icon: "📝",
    title: "問題配信",
    desc: "内容に合わせた最適な復習問題を配信",
  },
  {
    icon: "🎁",
    title: "特典獲得",
    desc: "解答を提出してプレゼントをゲット",
  },
  {
    icon: "📊",
    title: "レポート化",
    desc: "学習状況を保護者にレポートとしてお届け",
  },
];

function FlowSection() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          使い方はとても<span className="text-blue-accent">シンプル</span>
        </h2>
        <p className="text-gray-500 text-center mb-12">
          4つのステップで学習が定着します
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="text-xs font-bold text-blue-accent mb-2">
                STEP {i + 1}
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 特典セクション ─── */
function BenefitsSection() {
  return (
    <section className="px-6 py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          解答を提出すると<span className="text-blue-accent">特典盛りだくさん</span>
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          忘れずに解答を提出した生徒には、
          <br className="hidden sm:inline" />
          <span className="font-semibold">アマゾンギフト券</span>や
          <span className="font-semibold">LINEギフト</span>をプレゼントします。
        </p>
        <div className="mt-10 flex justify-center gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center w-40">
            <span className="text-4xl mb-3">🎁</span>
            <p className="text-sm font-semibold text-gray-700">Amazonギフト券</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center w-40">
            <span className="text-4xl mb-3">💚</span>
            <p className="text-sm font-semibold text-gray-700">LINEギフト</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 料金プランセクション ─── */
const plans = [
  {
    name: "ライト",
    price: "2,500",
    features: ["問題・解答配信"],
    recommended: false,
  },
  {
    name: "スタンダード",
    price: "4,800",
    features: [
      "問題・解答配信",
      "解答添削",
      "理解度レポート（月1回）",
    ],
    badge: "アマギフ・LINEギフト獲得対象",
    recommended: true,
  },
  {
    name: "プレミアム",
    price: "9,500",
    features: [
      "問題・解答配信",
      "解答添削",
      "理解度レポート（月1回）",
      "オンライン解説授業",
      "個別面談",
    ],
    badge: "アマギフ・LINEギフト獲得対象",
    recommended: false,
  },
];

function PricingSection() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          料金プラン
        </h2>
        <p className="text-gray-500 text-center mb-12">
          お子さまの学習スタイルに合わせてお選びください
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border-2 bg-white transition-shadow flex flex-col ${
                plan.recommended
                  ? "border-blue-accent shadow-lg scale-105"
                  : "border-gray-200 hover:shadow-md"
              }`}
            >
              <div className="h-6 mb-2">
                {plan.recommended && (
                  <span className="text-xs font-bold text-white bg-blue-accent rounded-full px-3 py-1">
                    おすすめ
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">¥{plan.price}</span>
                <span className="text-gray-500 text-sm"> /月（税込）</span>
              </div>
              <ul className="space-y-3 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-blue-accent mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 h-10 flex items-center justify-center">
                {"badge" in plan && plan.badge && (
                  <div className="text-xs text-line-green font-semibold bg-green-50 rounded-lg px-3 py-2 text-center">
                    🎁 {plan.badge}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── フッター ─── */
function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">TUTOLOOP</h2>

        <div className="mb-8">
          <Image
            src={LINE_QR_URL}
            alt="LINE友だち追加QRコード"
            width={160}
            height={160}
            className="mx-auto rounded-lg"
          />
          <p className="text-gray-400 text-xs mt-3">
            QRコードで友だち追加
          </p>
        </div>

        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-line-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.508.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
          LINE友だち追加
        </a>

        <p className="text-gray-500 text-xs mt-8">
          &copy; {new Date().getFullYear()} TUTOLOOP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─── お問い合わせセクション ─── */
function ContactSection() {
  return (
    <section className="px-6 py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">お問い合わせ</h2>
        <p className="text-gray-500 mb-8">
          ご質問やご不明点がございましたら、お気軽にお問い合わせください。
        </p>
        <div className="flex flex-col gap-3 text-gray-700">
          <p>📞 080-2484-1883</p>
          <p>✉️ tutoloop01@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

/* ─── メインページ ─── */
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FlowSection />
      <BenefitsSection />
      <PricingSection />
      <Footer />
      <ContactSection />
    </main>
  );
}
