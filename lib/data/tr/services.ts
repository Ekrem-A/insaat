import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "project-consulting",
    icon: "🏗️",
    title: "İnşaat Proje Danışmanlığı",
    shortDescription:
      "Planlama aşamasından teslimata kadar uçtan uca danışmanlık — projenizin program dahilinde, bütçe içinde ve kaliteli tamamlanmasını sağlıyorum.",
    fullDescription:
      "Her başarılı inşaat projesinin temelinde uzman rehberlik yatar. En erken planlama aşamasından son teslimata kadar mülk sahipleri ve geliştiricilerle birlikte çalışıyor; maliyetli sorunlara dönüşmeden önce riskleri tespit ediyor, tüm paydaşları hizalıyor ve projenizin netlik ve güvenle ilerlemesini sağlıyorum.",
    features: [
      "Proje fizibilitesi ve ön tasarım incelemesi",
      "Kapsam tanımlama ve kilometre taşı planlaması",
      "Paydaş koordinasyonu ve iletişim yönetimi",
      "Tasarım incelemesi ve yapılabilirlik analizi",
      "Saha ilerleme takibi",
      "Son denetim ve eksiklik yönetimi",
    ],
    process: [
      {
        step: 1,
        title: "İlk Değerlendirme",
        description:
          "Proje hedeflerinizi, saha koşullarını, bütçeyi ve zaman çizelgesini inceleyerek sağlam bir temel oluşturuyoruz.",
      },
      {
        step: 2,
        title: "Strateji ve Planlama",
        description:
          "Teslimatları, kilometre taşlarını ve kontrol noktalarını tanımlayan detaylı bir danışmanlık yol haritası hazırlanıyor.",
      },
      {
        step: 3,
        title: "Aktif İzleme",
        description:
          "Düzenli saha ziyaretleri, ilerleme raporları ve proaktif sorun çözümü projeyi yolunda tutuyor.",
      },
      {
        step: 4,
        title: "Tamamlama ve Teslimat",
        description:
          "Son denetimler, eksiklik tespiti ve dokümantasyon ile sorunsuz ve güvenli bir teslimat sağlanıyor.",
      },
    ],
  },
  {
    id: "cost-analysis",
    icon: "📊",
    title: "Maliyet Analizi ve Bütçe Planlaması",
    shortDescription:
      "Yatırımınızı baştan koruyan doğru maliyet tahminleri ve gerçekçi bütçeler.",
    fullDescription:
      "Tahminler muğlak veya aşırı iyimser olduğunda inşaat maliyetleri kontrolden çıkar. Malzeme fiyatlandırması, işgücü piyasası koşulları, beklenmedik durum rezervleri ve çoğu müşterinin hiç görmediği gizli giderleri hesaba katan detaylı, veri odaklı maliyet analizleri sunuyorum. Her projeye taahhüt ettiğiniz şeyi tam olarak bilerek girin.",
    features: [
      "Ön ve detaylı metraj hesapları",
      "Piyasa fiyatı malzeme ve işgücü karşılaştırması",
      "Değer mühendisliği fırsatları",
      "Nakit akışı planlaması ve hak ediş tahmini",
      "Değişiklik emri etki değerlendirmesi",
      "İnşaat boyunca bütçe sapması takibi",
    ],
    process: [
      {
        step: 1,
        title: "Kapsam İnceleme",
        description:
          "Çizimler, teknik şartnameler ve proje gereksinimlerinin kapsamlı analizi.",
      },
      {
        step: 2,
        title: "Metraj Hesabı",
        description:
          "Her malzeme ve işgücü kalemi titizlikle ölçülüp kalemize ediliyor.",
      },
      {
        step: 3,
        title: "Piyasa Fiyatlandırması",
        description:
          "Maliyetler güncel piyasa fiyatlarına ve doğrulanmış tedarikçi tekliflerine göre kıyaslanıyor.",
      },
      {
        step: 4,
        title: "Bütçe Raporu",
        description:
          "Beklenmedik durum önerileri içeren net, uygulanabilir bir bütçe raporu teslim ediliyor.",
      },
    ],
  },
  {
    id: "technical-supervision",
    icon: "🔍",
    title: "Teknik Denetim",
    shortDescription:
      "Sahada bağımsız ve uzman denetim — işlerin doğru yapıldığını, üzeri kapatılmadan önce doğrulayarak.",
    fullDescription:
      "İnşaattaki kalite sorunları gerçekten görünür değildir — alçıpan arkasında, beton altında, tavan arasında gizlenirler. Teknik denetim hizmetim, her kritik aşamada bağımsız doğrulama sağlıyor; henüz ucuza düzeltilebilecekken kusurları tespit ediyor ve müteahhitleri sözleşmenizin gerektirdiği standartlara uymak zorunda bırakıyor.",
    features: [
      "Yapısal ve temel denetimleri",
      "Beton dökümü ve donatı doğrulaması",
      "Mekanik, elektrik, sıhhi tesisat koordinasyon incelemesi",
      "Su yalıtımı ve ısı yalıtımı kalite kontrolleri",
      "Şartnameye göre malzeme uygunluk doğrulaması",
      "Fotoğraflı ilerleme dokümantasyonu",
    ],
    process: [
      {
        step: 1,
        title: "Denetim Planı",
        description:
          "Kritik denetim noktaları, çalışmalar başlamadan önce proje programına aktarılıyor.",
      },
      {
        step: 2,
        title: "Saha Ziyaretleri",
        description:
          "Her kritik aşamada zamanında saha ziyaretleri — temel, taşıyıcı sistem, cephe, iç donanım.",
      },
      {
        step: 3,
        title: "Eksiklik Raporlama",
        description:
          "Sorunlar fotoğraflarla belgeleniyor ve müteahhide resmi eksiklik bildirimleri yapılıyor.",
      },
      {
        step: 4,
        title: "Çözüm Doğrulama",
        description:
          "Tespit edilen tüm eksiklikler düzgün çözülüp onaylanana kadar takip ediliyor.",
      },
    ],
  },
  {
    id: "risk-assessment",
    icon: "⚠️",
    title: "Risk Değerlendirmesi",
    shortDescription:
      "Pahalı sürprizlere dönüşmeden önce riskleri tespit edin, ölçün ve azaltın.",
    fullDescription:
      "İnşaat doğası gereği risk içerir — program gecikmeleri, taşeron başarısızlıkları, öngörülemeyen saha koşulları, mevzuat değişiklikleri. Risk değerlendirme hizmetim, projenizin tehditlerini sistematik olarak tespit ediyor ve net bir azaltma yol haritası sunuyor; böylece kararlarınızı gözleriniz tamamen açık şekilde alıyorsunuz.",
    features: [
      "Sahaya özgü zemin ve çevre riski incelemesi",
      "Mevzuat ve izin riski analizi",
      "Müteahhit ve tedarik zinciri riski değerlendirmesi",
      "Program riski modellemesi (serbest zaman analizi)",
      "Sigorta kapsam açığı tespiti",
      "Risk sicili geliştirme ve izleme",
    ],
    process: [
      {
        step: 1,
        title: "Risk Tespiti",
        description:
          "Teknik, finansal, yasal ve operasyonel risklerin sistematik incelemesi.",
      },
      {
        step: 2,
        title: "Olasılık ve Etki Puanlaması",
        description:
          "Her risk, olasılık ve potansiyel finansal/program etkisine göre sıralanıyor.",
      },
      {
        step: 3,
        title: "Azaltma Planlaması",
        description:
          "Her önemli risk için pratik, önceliklendirilmiş azaltma stratejileri geliştiriliyor.",
      },
      {
        step: 4,
        title: "Süregelen İzleme",
        description:
          "Risk sicili, koşullar değiştikçe proje yaşam döngüsü boyunca güncelleniyor.",
      },
    ],
  },
  {
    id: "contractor-evaluation",
    icon: "✅",
    title: "Müteahhit Değerlendirmesi",
    shortDescription:
      "Yalnızca en ucuzunu değil, doğru müteahhidi seçin — bağımsız uzman değerlendirmesiyle.",
    fullDescription:
      "Yanlış müteahhit seçimi, herhangi bir inşaat projesindeki en büyük tek risktir. Müteahhitleri ve tekliflerini kapsamlı, tarafsız biçimde değerlendiriyorum; salt taban fiyatın ötesine geçerek finansal istikrara, geçmiş performansa, ekip yetkinliğine ve tekliflerindeki gizli varsayımlara bakıyorum.",
    features: [
      "Teklif analizi ve kapsam açığı tespiti",
      "Müteahhit finansal ve referans kontrolleri",
      "Taşeron yeterliliği incelemesi",
      "Sözleşme şartları analizi",
      "İhale karşılaştırması ve öneri raporları",
      "Sözleşme sonrası performans taban belirleme",
    ],
    process: [
      {
        step: 1,
        title: "İhale Belgesi İncelemesi",
        description:
          "İhale paketinizin piyasaya çıkmadan önce eksiksiz ve açık olmasının sağlanması.",
      },
      {
        step: 2,
        title: "Teklif Değerlendirme",
        description:
          "Alınan tüm tekliflerin kapsam farklılıkları ve varsayımlar için normalleştirilerek detaylı analizi.",
      },
      {
        step: 3,
        title: "Durum Tespiti",
        description:
          "Kısa listedeki müteahhitler için finansal kontroller, referans görüşmeleri ve geçmiş proje saha ziyaretleri.",
      },
      {
        step: 4,
        title: "Öneri",
        description:
          "Puanlama gerekçesiyle birlikte güvenle ihale vermenizi sağlayan yazılı öneri.",
      },
    ],
  },
];
