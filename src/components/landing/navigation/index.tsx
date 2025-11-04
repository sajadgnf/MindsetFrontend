import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-mono">M</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg">Mindset Makers</div>
              <div className="text-xs text-muted-foreground">آکادمی ذهن‌سازان</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              خانه
            </a>
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
              دوره‌ها
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              درباره ما
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              تماس با ما
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button className="hidden sm:inline-flex">ثبت‌نام در کارگاه</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
