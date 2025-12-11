import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-dark to-blue-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              Создай{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                мини-лендинг
              </span>
              <br />
              за 1 минуту
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Без доменов. Без хостинга. Без сложностей.<br />
              Запускай продажи сразу — прямо в Telegram.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <Icon name="Send" className="mr-2" size={24} />
              Открыть в Telegram
            </Button>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl rounded-full" />
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-2xl border border-purple-500/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <Icon name="Zap" size={24} />
                  </div>
                  <span className="text-2xl font-bold">Moji</span>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-xl border border-purple-500/20">
                  <div className="h-40 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-gray-600" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded-full w-3/4" />
                  <div className="h-4 bg-gray-700 rounded-full w-1/2" />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                  Связаться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-purple-400" />
      </div>
    </section>
  );
}
