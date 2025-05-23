import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Pin,
  Play,
  Eye,
  Layers,
  Bookmark,
  MousePointer2,
  SquareDashedMousePointer,
  Download,
  Star,
} from "lucide-react";
import MacAppDownloadButton from "@/components/ui/mac-app-download-button";
import Emoji from "@/components/ui/emoji";
import dotenv from "dotenv";

dotenv.config();

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="#hero" className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="Stackyのロゴ"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold">Stacky</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 ml-6">
              <Link
                href="#experience"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Stackyとは?
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                機能
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                価格
              </Link>
            </nav>
          </div>
          <div>
            {/* <Link href="#download">
              <Button className="hidden sm:flex gap-2">
                <Download className="h-4 w-4" />
                macOS版ダウンロード
              </Button> */}
            <MacAppDownloadButton
              downloadLink={process.env.NEXT_PUBLIC_DOWNLOAD_LINK || ""}
              gtmLabel="section-header"
            />
            {/* </Link> */}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    かっちり開発、まったり作業
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    ブラウザをワンクリックでピン留め。
                    <br />
                    もうタスクを視界から逃さない。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <MacAppDownloadButton
                    downloadLink={process.env.NEXT_PUBLIC_DOWNLOAD_LINK || ""}
                    gtmLabel="section-hero"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[800px] overflow-hidden rounded-xl border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="Stackyの利用画面"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Stackyとは?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stackyは、ブラウザを最前面にピン留めし半透明化することのできるmacOSアプリです。
                  <br />
                  タスクボードや「ながら動画」を視界から逃さず、作業とブラウザの両方に集中力を維持できるよう、あなたをサポートします。
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 py-12 md:grid-cols-2">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Emoji symbol="🚀" label="rocket" size={32} />
                </div>
                <h3 className="text-xl font-bold">バリバリ仕事モード</h3>
                <p className="text-muted-foreground text-center">
                  どこに置いたかもう見失わない。
                  <br />
                  あなたの使い慣れた
                  Webタスクボードを「ふせん」として活用できます。
                </p>
                <div className="relative w-full aspect-video overflow-hidden rounded-lg border">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="仕事モードの画面"
                    className="w-full object-cover"
                  />
                </div>
                {/* ブラウザ内に表示する */}
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Emoji symbol="☕️" label="rocket" size={32} />
                </div>
                <h3 className="text-xl font-bold">リラックス作業モード</h3>
                <p className="text-muted-foreground text-center">
                  「ながら動画」をゆったり作業のお供に。
                  <br />
                  動画などを視聴しながら、まったりと作業できる環境を提供します。
                </p>
                <div className="relative w-full aspect-video overflow-hidden rounded-lg border">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="リラックスモードの画面"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Stackyの機能
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  あなたの作業モードに応じて、ウィンドウの状態がすべてワンクリックで切り替えられます。
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">最前面への固定</h3>
                <p className="text-muted-foreground text-center">
                  ブラウザを常に最前面に固定して、必要な情報をいつでも確認できます。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">透明度の変更</h3>
                <p className="text-muted-foreground text-center">
                  ウィンドウの半透明化・透明度を自由に調整して作業環境に合わせられます。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">お気に入り追加</h3>
                <p className="text-muted-foreground text-center">
                  よく使うWebサイトをお気に入りに追加して、すぐにアクセスできます。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <SquareDashedMousePointer className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">クリック透過</h3>
                <p className="text-muted-foreground text-center">
                  クリック透過ウィンドウで情報を確認しながら、作業の妨げなくメインタスクに集中できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  価格
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  💎 すべての機能を無料開放中！ 💎
                </p>
              </div>
              <div className="mx-auto w-[300px] max-w-sm space-y-2 py-8">
                <div className="rounded-lg border bg-card p-8 shadow-sm">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">β版</h3>
                    <div className="flex justify-center items-center">
                      <p className="text-6xl font-bold">¥0</p>
                      <span className="text-sm text-muted-foreground ml-1">
                        期間限定
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      すべての機能が利用可能
                    </p>
                  </div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>最前面への固定</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>透明度の変更</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>お気に入り追加</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>クリック透過</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="download"
          className="w-full py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  今すぐ始めよう
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  macOS版をダウンロードして、新しい作業体験を手に入れましょう。
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2 py-8">
                <MacAppDownloadButton
                  downloadLink={process.env.NEXT_PUBLIC_DOWNLOAD_LINK || ""}
                  gtmLabel="section-download"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          {/* <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Stacky. All rights reserved.
          </p> */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              利用規約
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
