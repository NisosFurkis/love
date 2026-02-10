import { useState } from "react";
import "./Intro.css";
import img1 from "../assets/photos/1.jpeg";
import img2 from "../assets/photos/2.jpeg";
import img3 from "../assets/photos/3.jpeg";
import img4 from "../assets/photos/4.jpeg";
import img5 from "../assets/photos/5.jpeg";
import img6 from "../assets/photos/6.jpeg";
import img7 from "../assets/photos/7.jpeg";
import img8 from "../assets/photos/8.jpeg";
import img9 from "../assets/photos/9.jpeg";
import img10 from "../assets/photos/10.jpeg";
import img11 from "../assets/photos/11.jpeg";
import img12 from "../assets/photos/12.jpeg";
import img13 from "../assets/photos/13.jpeg";
import img14 from "../assets/photos/14.jpeg";
import img15 from "../assets/photos/15.jpeg";
import img16 from "../assets/photos/16.jpeg";
import img17 from "../assets/photos/17.jpeg";
import img18 from "../assets/photos/18.jpeg";
import img19 from "../assets/photos/19.jpeg";
import img20 from "../assets/photos/20.jpeg";
import img21 from "../assets/photos/21.jpeg";
import img22 from "../assets/photos/22.jpeg";
import img23 from "../assets/photos/23.jpeg";
import img24 from "../assets/photos/24.jpeg";
import img25 from "../assets/photos/25.jpeg";
import img26 from "../assets/photos/26.jpeg";
import img27 from "../assets/photos/27.jpg";
import img28 from "../assets/photos/28.jpeg";
import img29 from "../assets/photos/29.jpeg";
import img30 from "../assets/photos/30.jpeg";
import img31 from "../assets/photos/31.jpeg";
import img32 from "../assets/photos/32.jpeg";
import img33 from "../assets/photos/33.jpeg";
import img34 from "../assets/photos/34.jpeg";
import img35 from "../assets/photos/35.jpeg";
import img36 from "../assets/photos/36.jpeg";
import img37 from "../assets/photos/37.jpeg";
import img38 from "../assets/photos/38.jpeg";
import img39 from "../assets/photos/39.jpeg";
import img40 from "../assets/photos/40.jpeg";
import img41 from "../assets/photos/41.jpeg";
import img42 from "../assets/photos/42.jpeg";
import img43 from "../assets/photos/43.jpeg";
import img44 from "../assets/photos/44.jpeg";
import img45 from "../assets/photos/45.jpeg";
import img46 from "../assets/photos/46.jpeg";
import img47 from "../assets/photos/47.jpeg";
import img48 from "../assets/photos/48.jpeg";
import img49 from "../assets/photos/49.jpeg";
import img50 from "../assets/photos/50.jpeg";
import img51 from "../assets/photos/51.jpeg";
import img52 from "../assets/photos/52.jpeg";
import img53 from "../assets/photos/53.jpeg";
import img54 from "../assets/photos/54.jpeg";
import img55 from "../assets/photos/55.jpeg";
import img56 from "../assets/photos/56.jpeg";


export default function Intro() {
  const [opened, setOpened] = useState(false);
  const [index, setIndex] = useState(0);
  const slides = [
    {
      img: img1,
      note: "Yürüdüm biraz, seni düşledim.\nUmudumu senle süsledim.\nNe dar sokaklar ne boş duraklar.\nSeni unutmama yardım etti.\n\nGökhan Türkmen Konseri - 06.06.2024"
    },
    {
      img: img2,
      note: "Sana Ankara'yı anlattığım parkı, seninle yürümekte varmış ~ Kader\n\nEsertepe Vadisi - 24.06.2024"
    },
    {
      img: img3,
      note: "Resmi olarak ilk pikniğimiz :)\n\nDikmen Vadisi - 05.07.2024"
    },
    {
      img: img4,
      note: "Seninle bekleyeceksem eğer, hiç bir şeyin yolunu gözlemem.\n\nYıldırım Kule Otobüs Durağı - 16.07.2024"
    },
    {
      img: img5,
      note: "Duyguların döküldüğü, her şeyin başladığı park.\n\nBahçelievler Eser Parkı - 19.07.2024"
    },
    {
      img: img6,
      note: "Bir yıldız gökte kayıp giderken,\nIslak bir yolda yalnız yürürken,\nBambaşka bir şeyi düşünürken, aklımdasın...\nSanki hiç gitmemiş hep var gibi,\nBir sırrı herkesten saklar gibi,\nSessizce sokulup ağlar gibi, yanımdasın...\n\nKarsu Konseri - 26.07.2024"
    },
    {
      img: img7,
      note: "Elini tutup yürüdüğüm her yol, cennete giden bir yol gibi...\n\nBahçelievler Metro - 09.08.2024"
    },
    {
      img: img8,
      note: "Seninle yapılan piknik; bir çocuğun sevinci, bir babanın gururu gibi...\n\nMogan Gölü - 17.08.2024"
    },
    {
      img: img9,
      note: "Mogan Gölü - 17.08.2024"
    },
    {
      img: img10,
      note: "Senin doğduğun gün, benim yeniden doğduğum gün. \n\nYıldırım Kule - 28.08.2024"
    },
    {
      img: img11,
      note: "Bir gülüşü var, bin derde deva desen.\nBir bakışı var, dünyalar ona bedel.\n\nAnkamall AVM - 14.09.2024"
    },
    {
      img: img12,
      note: "Gökyüzü, deniz (göl) ve aşk. Başka neye gerek...\n\nGölbaşı - 15.09.2024"
    },
    {
      img: img13,
      note: "\n\nGölbaşı - 15.09.2024"
    },
    {
      img: img14,
      note: "Mutluluk en karanlık zamanlarda bile bulunabilir, yeter ki insan ışığı açmayı hatırlasın... ~ Albus Dumbledore\n\nBahçelievler - 22.09.2024"
    },
    {
      img: img15,
      note: "\n\nBahçelievler - 22.09.2024"
    },
    {
      img: img16,
      note: "Çocuklar gibi eğlendiğimiz bir gün daha..\n\nGöksu Parkı - 29.09.2024"
    },
    {
      img: img17,
      note: ":) \n\nGöksu Parkı - 29.09.2024"
    },
    {
      img: img18,
      note: "\n\nGöksu Parkı - 29.09.2024"
    },
    {
      img: img19,
      note: "Manzara mı? Tabi ki yanımda :)\n\nAnkara Gençlik Parkı - 06.10.2024"
    },
    {
      img: img20,
      note: "\n\nAnkara Gençlik Parkı - 06.10.2024"
    },
    {
      img: img21,
      note: "\n\nAnkara Gençlik Parkı - 06.10.2024"
    },
    {
      img: img22,
      note: "Başarılar seninle birlikte güzel.\n\nPark Sitesi - 27.10.2024"
    },
    {
      img: img23,
      note: "Yüzüm gülüyor ama içim buruk.\n\nPark Sitesi - 16.11.2024"
    },
    {
      img: img24,
      note: "\n\nPark Sitesi - 16.11.2024"
    },
    {
      img: img25,
      note: "Hasretin, özlemin ilk bitişi...\n\nYıldırım Kule - 23.12.2024"
    },
    {
      img: img26,
      note: "\n\nYıldırım Kule - 23.12.2024"
    },
    {
      img: img27,
      note: "\n\nSarılamasakta gözlerini, gülüşünü görmenin verdiği mutluluk :)"
    },
    {
      img: img28,
      note: "Hiç özlemediğim kadar özlüyorum seni,\nNiye bilmiyorum ama ben sadece senle mutluyum.\nAh şu gönül gözünden görmek dedikleri,\nSeni her halinle seviyorum...\n\nYalın Konseri - 15.02.2025"
    },
    {
      img: img29,
      note: "Ben zaten eridim.\n\nYalın Konseri - 15.02.2025"
    },
    {
      img: img30,
      note: "Bir gülüşüne ömrümü veririm.\n\nChocolabs Taurus AVM - 22.02.2025"
    },
    {
      img: img31,
      note: "\n\nChocolabs Taurus AVM - 22.02.2025"
    },
    {
      img: img32,
      note: "Bir takım eğlenceler :)\n\nCepa AVM - 23.02.2025"
    },
    {
      img: img33,
      note: "\n\nCepa AVM - 23.02.2025"
    },
    {
      img: img34,
      note: "\n\nCepa AVM - 23.02.2025"
    },
    {
      img: img35,
      note: "Yanında bulduğum huzuru çok özledim...\n\nHappy Moons - 23.02.2025"
    },
    {
      img: img36,
      note: "\n\nHappy Moons - 23.02.2025"
    },
    {
      img: img37,
      note: "Yine bir hasretin bitimi :)\n\nUğur Mumcu Parkı - 28.03.2025"
    },
    {
      img: img38,
      note: "Gözlerinde doğdum, gülüşlerinde yaşadım, kalbinde ölmek istiyorum...\n\nMirim Cafe - 31.03.2025"
    },
    {
      img: img39,
      note: ":)\n\nHappy Moons - 10.05.2025"
    },
    {
      img: img40,
      note: "İlk yıl dönümü. Gurbete giderken temsilcimi bırakıyorum. :)\n\nCepa AVM - 19.07.2025"
    },
    {
      img: img41,
      note: "Her gülüşünde, \n\nSöğütözü Mado - 20.07.2025"
    },
    {
      img: img42,
      note: "Eriyorum :)\n\nSöğütözü Mado - 20.07.2025"
    },
    {
      img: img43,
      note: "Bu hayat seninle beraber gülünce güzel.\n\nUğur Mumcu Parkı - 20.07.2025"
    },
    {
      img: img44,
      note: "\n\nUğur Mumcu Parkı - 20.07.2025"
    },
    {
      img: img45,
      note: "Son diye bir şey yoktur.\n\nFiruze Cafe - 06.12.2025"
    },
    {
      img: img46,
      note: "Bir anıda, bir fotoğrafta, bir müzikte...\n\nFiruze Cafe - 06.12.2025"
    },
    {
      img: img47,
      note: "Her zaman var olacağız.\n\nFiruze Cafe - 06.12.2025"
    },
    {
      type: "letter",
      text: "Kim haklı kim suçlu umurumda değil. Beraber çıktığımız bu yolda sonuç olarak ayrıldık. Ben ilk defa seninle tamamlandım bu hayatta. Hayatıma girdiğin günden beri sensiz bir gelecek düşünmedim. Bütün hayallerim, bütün umutlarım hepsi sendin. Sen dahil herkes bana ne yapmam gerektiğini söylüyor. Arama, yazma, hayatına devam et, unut. Kendi kararlarımı kendim vereceğim. Hikayemizi tamamlamak senin iradende."
    },    
    {
    img: img48,
      note: ""
    },
    {
      img: img49,
      note: ""
    },
    {
      img: img50,
      note: ""
    },
    {
      img: img51,
      note: ""
    },
    {
      img: img52,
      note: ""
    },
    {
      img: img53,
      note: ""
    },
    {
      img: img54,
      note: ""
    },
    {
      img: img55,
      note: ""
    },
    {
      img: img56,
      note: "Bu kadar hüzünlü olmazsın belki, belki daha fazla gülersin..."
    }
  ]

  return (
    <div className="intro">
      {!opened && (
        <div className="intro-center">
          <h1 className="poem">Ve yaprak dala dedi ki; Beni unutma hatırla yeşil günlerimizi...</h1>
          
          <button onClick={() => setOpened(true)}>Devam Et</button>
        </div>
      )}

      {opened && (
        <div>
          {slides[index].type === "letter" ? (
            <div className="letter-screen">
              <div className="letter">
                <p>{slides[index].text}</p>
              </div>
              <button
                className="bottom-button"
                onClick={() => setIndex(index + 1)}
              >Devam Etmek Senin Elinde</button>
            </div>
          ) : (
            <div>
            <div className="image-box" key={index}>
              <img src={slides[index].img} alt="Anı" />
              <small className="poem">{slides[index].note}</small>
            </div>
            
            {index < slides.length - 1 && (
              <button
                className="bottom-button"
                onClick={() => setIndex(index + 1)}
              >
                Devam Et
              </button>
            )}
          </div>
          )}
          
        </div>
      )}
    </div>
  );
}