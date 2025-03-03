import './styles.css'

import { Card } from '@components/Card'
import { MyDoodle } from '@components/MyDoodle'

export const HomePage = () => {
  const colors = [
    '#321730',
    '#4e2b4b',
    '#8a5689',
    '#dadbbb',
    '#a5a681',
    '#969495',
    '#373940',
    '#2f1e0a',
    '#0e0e13',
    '#e9f0c0',
    '#dcd294',
    '#aec55d',
    '#96af4c',
    '#739c3e',
    '#686573',
    '#71879a',
    '#b1c5d4',
    '#d6d7dc',
    '#d8b9aa',
    '#e4bcbc',
    '#e7ceb4',
    '#b4856e',
  ]

  return (
    <div className="bg-slate-50" style={{ position: 'relative', overflowX: 'auto' }}>
      <MyDoodle />

      <div id="intro" className="min-h-screen flex justify-center items-end">
        <div
          className="text-center p-10 mb-10 rounded-2xl relative"
        >
          <div className="blurry z-10" />
          <div className="text-5xl leading-[1.25] px-4 z-20 relative text-slate-100">ОТМЕЧАЕМ 5-ЛЕТИЕ БРАКА<br />14 МАРТА 2025</div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative" style={{ maxWidth: '800px' }}>
          <Card className="mt-8 mx-4" style={{ zIndex: 1 }}>
            <div className="text-3xl text-center">Часть I: ЗАГС</div>
            <p className="text-lg">В 2020 наш корабль под названием &quot;Любовь&rdquo; отправился в бухту под названием &quot;Семья&rdquo;. В ковидный год, 21 марта, мы успели торжественно бракосочетаться, до полного закрытия на карантин.</p>
            <p className="text-lg">И вот, спустя 5 лет нам захотелось повторить торжественную церемонию в том же месте, но без ограничений. 14 марта 2025 года марш Мендельсона прозвучит для нас вновь в старинном доме фон Дервизов. Приглашаем всех, кто хочет разделить с нами эти минуты!</p>
            <p className="text-lg">Дворец бракосочетания № 1, Английская наб., 28. Начало в 18:30</p>
          </Card>

          <Card className="mt-8 mx-4" style={{ zIndex: 1 }}>
            <div className="text-3xl text-center">Часть II: СВОБОДНАЯ</div>
            <p className="text-lg">После официальной части приглашаем вас к нам в гости, а после в бар/клуб. Будем ориентироваться по настроению и пожеланиям.</p>
            <p className="text-lg">В программе: теплая непринужденная атмосфера, общение, танцы, музыка, вино и легкие закуски.</p>
          </Card>

          <Card className="mt-8 mx-4" style={{ zIndex: 1 }}>
            <div className="text-size-4 text-center line-height-compact">Дресс-код для гостей</div>
            <p className="text-lg">
              <span>М - Классический костюм или жилет с рубашкой</span>
              <span><br />Ж - Коктейльное или вечернее платье</span>
            </p>
            <p className="text-lg">Цветовая гамма нарядов: приглушенные фиолетовые оттенки, сиреневый, баклажан, серый, серо-белый, нежно-зеленый, фисташковый, оливковый, зеленый и все нюдовые оттенки.</p>

            <div className="flex flex-wrap justify-center">
              {colors.map(color => (
                <div
                  key={color}
                  className="p-6 m-4"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="flex justify-center py-8">
        <div>❤️ Сделано Ромой и Сашей, с любовью ❤️</div>
      </div>
    </div>
  )
}
