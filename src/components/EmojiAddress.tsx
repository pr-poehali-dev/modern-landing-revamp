import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const EMOJI_SET = ['😂','😇','😍','😊','😘','😭','😈','😎','😱','🤔','😵','😴','😢','💩','👾','👻','👽','🤖','🎃','😻','🙀','🖖','🙈','🐸','🐙','🌝','🌚','🔥','🍏','🍎','🎱','🎹','🎁','🎈','🎉','🔞'];

const SlotMachineEmoji = () => {
  const [emojis, setEmojis] = useState<string[]>([]);

  const getRandomEmoji = () => EMOJI_SET[Math.floor(Math.random() * EMOJI_SET.length)];

  const spinSlots = () => {
    const newEmojis = [...emojis];
    
    // Меняем эмодзи последовательно с задержкой
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        newEmojis[i] = getRandomEmoji();
        setEmojis([...newEmojis]);
      }, i * 200); // Задержка 200мс между каждым слотом
    }
  };

  useEffect(() => {
    // Инициализируем начальные эмодзи
    setEmojis([getRandomEmoji(), getRandomEmoji(), getRandomEmoji(), getRandomEmoji()]);
    
    // Автоматическая смена каждые 5 секунд
    const autoSpin = setInterval(() => {
      spinSlots();
    }, 5000);

    return () => clearInterval(autoSpin);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-400 font-mono">moji.vc/</span>
      <div className="flex gap-1">
        {emojis.map((emoji, index) => (
          <span 
            key={index} 
            className="text-2xl transition-all duration-300 ease-in-out"
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function EmojiAddress() {
  return (
    <section className="py-20 px-4 relative overflow-hidden scroll-animate">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Что такое <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">emoji-адрес</span>?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Icon name="Link" size={24} />
              </div>
              <div className="text-sm text-gray-400 font-mono">moji.vc/username</div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-200">Обычный адрес</h3>
            <p className="text-gray-400">Классическая ссылка с твоим ником для деловых контактов</p>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/40 p-8 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Icon name="Sparkles" size={24} />
                </div>
                <SlotMachineEmoji />
              </div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                Emoji-адрес
                <span className="text-xs bg-purple-500/30 text-purple-300 px-2 py-1 rounded-full">Уникально</span>
              </h3>
              <p className="text-gray-300">Яркая ссылка из 4 эмодзи — выделяйся и запоминайся!</p>
            </div>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20 p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="Gift" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Бесплатный рандом</h4>
                  <p className="text-sm text-gray-400">При создании страницы получи случайную комбинацию из 4 эмодзи — совершенно бесплатно</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="Shuffle" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Меняй сколько хочешь</h4>
                  <p className="text-sm text-gray-400">Не понравился? Крути слот-машину заново и получай новый emoji-адрес</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="Crown" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Купи красивый</h4>
                  <p className="text-sm text-gray-400">Хочешь крутую комбинацию типа 🔥🔥🔥🔥 или 💎💰🚀⭐? Выбери и приобрети премиум-адрес</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="Star" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Будь уникальным</h4>
                  <p className="text-sm text-gray-400">Emoji-адреса запоминаются лучше и выделяют твою страницу среди сотен других</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-900/20 border border-purple-500/30 rounded-full px-6 py-3">
            <Icon name="Info" size={18} className="text-purple-400" />
            <p className="text-sm text-gray-300">
              Каждый emoji-адрес уникален — больше ни у кого не будет такого же!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}