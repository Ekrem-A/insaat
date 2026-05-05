import type en from './en';

type Dictionary = typeof en;

const tr: Dictionary = {
  nav: {
    home: 'Ana Sayfa',
    about: 'Hakkımda',
    services: 'Hizmetler',
    projects: 'Projeler',
    blog: 'Blog',
    contact: 'İletişim',
    cta: 'Ücretsiz Danışmanlık',
  },
  common: {
    learnMore: 'Daha fazla',
    freeConsultation: 'Ücretsiz Danışmanlık Alın',
    viewProjects: 'Projeleri İncele',
    discussProject: 'Projenizi Görüşelim',
    backToBlog: '← Bloga Dön',
    sendMessage: 'Mesaj Gönder',
    sending: 'Gönderiliyor...',
    startConversation: 'Görüşmeye Başla',
    seeWork: 'Projelerimi Gör',
    latestArticle: 'Son Makale',
    minRead: 'dk okuma',
    keyResults: 'Temel Sonuçlar',
    howItWorks: 'Nasıl Çalışır',
    learnMoreArrow: 'Devamını oku →',
    budget: 'Bütçe',
    duration: 'Süre',
    allProjects: 'Tüm projeler',
    viewAllServices: 'Tüm hizmetleri görüntüle',
  },
  hero: {
    eyebrow: 'Lisanslı Profesyonel Mühendis',
    headline: 'Güvenilir Profesyonel İnşaat Danışmanlığı',
    headlineAccent: 'Yanınızdayım',
    subheadline:
      'Mülk sahipleri ve yatırımcıların güvenle inşa etmelerine yardımcı oluyorum — sorunları maliyetlenmeden önce tespit ediyorum, doğru müteahhitleri seçiyorum ve projelerin ilk danışmadan teslimine kadar yolunda gitmesini sağlıyorum.',
    ctaPrimary: 'Ücretsiz Danışmanlık Alın',
    ctaSecondary: 'Projeleri İncele',
    stats: [
      { value: '15+', label: 'Yıl Deneyim' },
      { value: '200+', label: 'Tamamlanan Proje' },
      { value: '$120M+', label: 'Yönetilen Proje Değeri' },
      { value: '%98', label: 'Müşteri Memnuniyeti' },
    ],
  },
  servicesOverview: {
    eyebrow: 'Ne Yapıyorum',
    title: 'Yatırımınızı Koruyan Hizmetler',
    subtitle:
      'İlk fizibilite çalışmasından son teslimata kadar — inşaat projenizin her kritik aşamasında uzman rehberlik.',
    viewAll: 'Tüm hizmetleri görüntüle',
  },
  whyChooseMe: {
    eyebrow: 'Neden Benimle Çalışın',
    title: 'Bağımsız Danışmanlığın Avantajı',
    subtitle:
      'İnşaat sorunlarının büyük çoğunluğu önlenebilir. Fark yaratan şey, rakip çıkarları olmayan ve doğru uzmanlığa sahip birinin sizin yanınızda olmasıdır.',
    credentialsTitle: 'Yeterlilikler ve Üyelikler',
    credentials: [
      'Lisanslı PE — Colorado, Texas, Arizona',
      'AACE International Üyesi',
      'CMAA — İnşaat Yönetimi Derneği',
      'LEED Akredite Profesyonel',
      '15+ Yıl Saha Deneyimi',
    ],
    reasons: [
      {
        icon: '🔍',
        title: 'Bağımsız — Çıkar Çatışması Yok',
        description:
          'Ben müteahhit, mimar veya malzeme tedarikçisi değilim. Yalnızca sizin için çalışıyorum — projenizdeki hiçbir başka karardan finansal çıkarım yok.',
      },
      {
        icon: '🏛️',
        title: 'Lisanslı Profesyonel Mühendis',
        description:
          'Değerlendirmelerim ve raporlarım profesyonel mühendislik ağırlığı taşıyor — finansman, anlaşmazlık ve yasal süreçlerde işe yarıyor.',
      },
      {
        icon: '📋',
        title: 'Süreç Odaklı, Reaktif Değil',
        description:
          'Sistematik denetim protokolleri ve risk çerçeveleri kullanıyorum — sezgiye değil. Her kritik aşamanın tanımlı bir kontrol listesi var. Hiçbir şey gözden kaçmıyor.',
      },
      {
        icon: '💬',
        title: 'Sade ve Anlaşılır İletişim',
        description:
          "Projenizde neler döndüğünü anlamak için mühendislik diplomasına ihtiyacınız yok. Teknik sorunları net, harekete geçilebilir kararlara dönüştürüyorum.",
      },
      {
        icon: '⏱️',
        title: 'Kritik Anlarda Erişilebilir',
        description:
          "İnşaat ofis saatlerini beklemez. Sahada kritik bir karar veya beklenmedik bir sorun çıktığında hızlı ve kararlı bir yanıt alırsınız.",
      },
      {
        icon: '📈',
        title: 'Ölçülebilir Yatırım Getirisi',
        description:
          'Tamamladığım her müşteri sürecinde, tespit edilen kusurlar, müzakere edilen değişiklik emirleri veya önlenen gecikme maliyetleri aracılığıyla danışmanlık ücretimden fazlasını geri kazandırdım.',
      },
    ],
  },
  featuredProjects: {
    eyebrow: 'Son Çalışmalar',
    title: 'Kendileri Konuşan Projeler',
    subtitle:
      'Gerçek müşterilerden gerçek sonuçlar. Her proje farklı bir hikaye anlatır — işte son üç çalışma.',
    allProjects: 'Tüm projeler',
  },
  testimonials: {
    eyebrow: 'Müşteri Hikayeleri',
    title: 'Müşteriler Ne Diyor?',
    subtitle:
      'Bağımsız danışmanlığı tercih eden mülk sahipleri ve geliştiricilerden gerçek geri bildirimler.',
  },
  cta: {
    eyebrow: 'Ücretsiz İlk Danışmanlık',
    title: 'Güvenle İnşa Etmeye Hazır Mısınız?',
    subtitle:
      'Her proje bir konuşmayla başlar. Durumunuzu ele alalım ve uzman danışmanlığın tam olarak nerede en büyük farkı yaratacağını birlikte belirleyelim.',
    primary: 'Ücretsiz Danışmanlık Alın',
    phone: '(303) 555-0147',
  },
  footer: {
    description:
      'Mülk sahipleri, yatırımcılar ve geliştiriciler için bağımsız inşaat danışmanlığı. 15+ yıllık deneyimle projelerin zamanında, bütçe dahilinde ve standartlara uygun teslim edilmesini sağlıyorum.',
    location: 'Denver, CO — Tüm ABD genelinde hizmet veriyorum',
    servicesTitle: 'Hizmetler',
    companyTitle: 'Şirket',
    license: 'Lisanslı Profesyonel Mühendis · Colorado PE Lisans #45821',
    copyright: 'James Harrington İnşaat Danışmanlığı. Tüm hakları saklıdır.',
  },
  about: {
    eyebrow: 'Hakkımda',
    headline: 'Yanınızdaki Danışman',
    p1: 'Kariyerime inşaat yaparak başladım — beton dökümlerini denetleyerek, taşeronları koordine ederek ve her inşaat sahasında ortaya çıkan binlerce küçük sorunu çözerek. 500.000 dolarlık özel villalardan 15 milyon dolar üzeri ticari yapılara kadar 15 yıllık proje deneyiminin ardından, inşaat uzmanlığına en çok ihtiyaç duyanların arkalarında bir inşaat departmanı olmayanlar olduğunu fark ettim.',
    p2: "Mülk sahipleri, özel yatırımcılar ve küçük şirketler, inşaatı gerçekten anlayan biri yanlarında olmaksızın milyonlarca dolarlık kararlar alıyordu. İşte bu yüzden geleneksel pratiği bırakıp bağımsız danışmanlık sunmaya başladım — büyük geliştiricilerin olağan karşıladığı uzmanlığı, buna tam anlamıyla hak eden müşterilere taşımak için.",
    ctaPrimary: 'Görüşmeye Başla',
    ctaSecondary: 'Projelerimi Gör',
    photoCaption: 'James Harrington, PE',
    photoSubCaption: 'İnşaat Danışmanı',
    statLabel: 'Yıllık saha deneyimi',
    approachEyebrow: 'Yaklaşımım',
    approachTitle: 'Nasıl Çalışıyorum',
    approachSubtitle: 'Her müşteri sürecine yön veren üç temel ilke.',
    values: [
      {
        icon: '🎯',
        title: 'Hızdan Önce Kesinlik',
        body: "Yanlış çıkabilecek hızlı bir yanıt vermektense kesin olmak için ekstra bir saat harcamayı tercih ederim. İnşaat kararları çoğu zaman geri döndürülemez — dikkatli bir analizi hak ederler.",
      },
      {
        icon: '🤝',
        title: 'Tam Şeffaflık',
        body: 'Ne bulduğumu, ne anlama geldiğini ve ne önerdiğimi her zaman tam olarak bileceksiniz. Proje sonucunuzu iyileştiremeyeceğimi düşünüyorsam bunu da söylüyorum — daha kısa bir süreç anlamına gelse bile.',
      },
      {
        icon: '📐',
        title: 'Sezgi Değil Sistem',
        body: 'İyi danışmanlık tekrarlanabilir. Yapılandırılmış denetim protokolleri, risk çerçeveleri ve maliyet tahmin metodolojileri kullanıyorum — önemli hiçbir şeyin şansa bırakılmaması için.',
      },
    ],
    timelineEyebrow: 'Kariyer Yolculuğu',
    timelineTitle: 'Önem Taşıyan Deneyim',
    timelineSubtitle:
      '15 yılı aşkın sürede saha mühendisliğinden bağımsız danışmanlığa uzanan yolculuk — inşaat pratiğinin tüm yelpazesi.',
    timeline: [
      {
        year: '2011–2014',
        role: 'Saha Mühendisi',
        company: 'Meridian İnşaat Grubu',
        description:
          "Colorado ve Wyoming genelinde orta ölçekli ticari ve konut projeleri için saha mühendisliği yönetimi. Yapısal denetim, taşeron koordinasyonu ve kalite kontrol dokümantasyonundan sorumlu.",
      },
      {
        year: '2014–2017',
        role: 'Proje Mühendisi',
        company: 'Apex Mühendislik Çözümleri',
        description:
          '15 milyon dolara kadar bütçeye sahip kamu altyapısı ve karma kullanım geliştirme projelerinde teknik mühendislik liderliği. Maliyet yönetimi, planlama ve risk değerlendirmesinde uzmanlık geliştirdi.',
      },
      {
        year: '2017–2020',
        role: 'Kıdemli Proje Yöneticisi',
        company: 'Harrington & Ortakları',
        description:
          'Karmaşık, çok milyon dolarlık inşaat projelerinde tam proje yönetimi sorumluluğu. Bağımsız danışmanlık metodolojisi geliştirdi ve firma çalışmasının yanı sıra özel müşterilere hizmet vermeye başladı.',
      },
      {
        year: '2020–Günümüz',
        role: 'Bağımsız İnşaat Danışmanı',
        company: 'James Harrington Danışmanlık',
        description:
          'Uzman, tarafsız inşaat danışmanlığına ihtiyaç duyan mülk sahipleri, yatırımcılar ve şirketlere hizmet vermek amacıyla bağımsız pratik başlattı. Bugüne kadar 120 milyon dolar üzerinde proje değerini yönetti ve denetledi.',
      },
    ],
    certifications: [
      { label: 'Lisanslı Profesyonel Mühendis (PE)', detail: 'Colorado #45821 · Texas · Arizona' },
      { label: 'LEED Akredite Profesyonel', detail: 'Yeşil Bina Sertifikasyon Enstitüsü' },
      { label: 'AACE International Üyesi', detail: 'Sertifikalı Maliyet Uzmanı adayı' },
      { label: 'İnşaat Yönetimi Derneği (CMAA)', detail: '2015\'ten bu yana aktif üye' },
      { label: 'OSHA 30 Saatlik İnşaat', detail: 'Güncel sertifika' },
      { label: 'İnşaat Mühendisliği Lisans', detail: 'Colorado Boulder Üniversitesi, 2011' },
    ],
    certificationsEyebrow: 'Yeterlilikler',
    certificationsTitle: 'Eğitim ve Sertifikalar',
    ctaHeadline: 'Projenizi Konuşalım',
    ctaBody:
      "İlk danışmanlık her zaman ücretsizdir. Taahhüt yok, baskı yok — sadece projeniz ve nasıl yardımcı olabileceğim hakkında dürüst bir sohbet.",
    ctaButton: 'Ücretsiz Danışmanlık Alın',
  },
  servicesPage: {
    eyebrow: 'Hizmetler',
    headline: 'Her Aşamada Uzman Danışmanlık',
    subtitle:
      'İnşaat projeleri belirli, öngörülebilir noktalarda başarısız olur. Hizmetlerim tam olarak bu anlarda uzman kapsam sağlamak için tasarlandı — büyük geliştiricilerin olağan saydığı bağımsız denetimi yatırımınız için sunuyor.',
    notSureTitle: 'Hangi Hizmete İhtiyacınız Olduğundan Emin Değil misiniz?',
    notSureBody:
      "Ücretsiz danışmanlıkla başlayın. Projenizi birlikte ele alır ve uzman denetimin en fazla değer katacağı noktaları tam olarak size söylerim — hiçbir yükümlülük olmaksızın.",
    notSureCta: 'Ücretsiz Danışmanlık Alın',
    howItWorks: 'Nasıl Çalışır',
    discuss: 'Projenizi Görüşelim',
  },
  projectsPage: {
    eyebrow: 'Portföy',
    headline: 'Projeler ve Vaka Çalışmaları',
    subtitle:
      'Aşağıdaki her süreç gerçek bir proje ve gerçek sonuçlardır. Rakamlar doğrulanmış, sonuçlar kendileri adına konuşuyor.',
    stats: [
      { value: '200+', label: 'Tamamlanan proje' },
      { value: '$120M+', label: 'Yönetilen proje değeri' },
      { value: '%1,4', label: 'Ort. bütçe sapması' },
      { value: '%98', label: 'Zamanında teslim oranı' },
    ],
    caseStudiesEyebrow: 'Vaka Çalışmaları',
    caseStudiesTitle: 'Seçilmiş Proje Çalışmaları',
    caseStudiesSubtitle:
      'Proje türleri ve sunulan hizmetler genelinde temsili bir örnekleme.',
    keyResults: 'Temel Sonuçlar',
    budget: 'Bütçe',
    duration: 'Süre',
    ctaTitle: 'Sıradaki Proje Sizinki Olabilir',
    ctaBody: "Yukarıdaki her proje tek bir konuşmayla başladı. Sizinkini de konuşalım.",
    ctaButton: 'Ücretsiz Danışmanlık Alın',
  },
  blogPage: {
    eyebrow: 'Blog',
    headline: 'İnşaat Yönetimi Rehberi',
    subtitle:
      'İnşaat danışmanlığı, maliyet yönetimi, kalite kontrolü ve yatırımınızı koruma konularında pratik makaleler — mühendisler için değil, mülk sahipleri için yazılmış.',
    latestArticle: 'Son Makale',
    moreArticlesTitle: 'Okumaya Devam Et',
    minRead: 'dk okuma',
    min: 'dk',
  },
  blogPost: {
    backToBlog: '← Bloga Dön',
    minRead: 'dk okuma',
    authorDescription:
      '15+ yıllık saha deneyimine sahip bağımsız inşaat danışmanı. Lisanslı Profesyonel Mühendis. Mülk sahiplerinin ve yatırımcıların güvenle inşa etmelerine yardımcı oluyor.',
    learnMore: 'Devamını oku →',
    relatedTitle: 'Okumaya Devam Et',
    ctaTitle: 'Aklınızda Bir Proje Var mı?',
    ctaBody:
      'Bu bilgiyi projenizde hayata geçirin. İlk danışmanlık ücretsizdir.',
    ctaButton: 'Ücretsiz Danışmanlık Alın',
  },
  contactPage: {
    eyebrow: 'İletişim',
    headline: 'Projenizi Konuşalım',
    subtitle:
      'İlk danışmanlık ücretsizdir ve devam etme yükümlülüğü yoktur. Formu doldurun, en geç bir iş günü içinde size döneyim.',
    formTitle: 'Mesaj Gönderin',
    formSubtitle:
      "Projeniz hakkında bilgi verin, bir görüşme planlamak için size ulaşacağım.",
    otherWaysTitle: 'Diğer İletişim Yolları',
    expectTitle: 'Sizi Neler Bekliyor',
    expectSteps: [
      'Proje detaylarınızı inceleyip 30 dakikalık bir görüşme planlamak için size ulaşacağım.',
      'Özel durumunuzu, hedeflerinizi ve acil endişelerinizi birlikte ele alıyoruz.',
      "Projenize nasıl yaklaşacağımı ve ne gibi bir değer sunacağımı tam olarak açıklıyorum.",
      'Uygunsa devam ediyoruz. Uygun değilse hiçbir baskı yok.',
    ],
    whatsappTitle: "WhatsApp'tan Yazın",
    whatsappSubtitle: 'Hızlı sorular için doğrudan mesaj atın',
    whatsappHref:
      'https://wa.me/13035550147?text=Merhaba%20James%2C%20%C3%BCcretsiz%20dan%C4%B1%C5%9Fmanl%C4%B1k%20g%C3%B6r%C3%BC%C5%9Fmesi%20planlamak%20istiyorum.',
    form: {
      nameLabel: 'Ad Soyad',
      namePlaceholder: 'Ayşe Kaya',
      emailLabel: 'E-posta Adresi',
      emailPlaceholder: 'ayse@ornek.com',
      phoneLabel: 'Telefon Numarası',
      phoneOptional: '(isteğe bağlı)',
      phonePlaceholder: '0532 555 0000',
      projectTypeLabel: 'Proje Türü',
      projectTypePlaceholder: 'Tür seçin...',
      budgetLabel: 'Tahmini Bütçe',
      budgetPlaceholder: 'Aralık seçin...',
      messageLabel: 'Projeniz Hakkında Bilgi Verin',
      messagePlaceholder:
        'Projenizi anlatın — konum, zaman çizelgesi, karşılaştığınız zorluklar veya en çok ilgilendiğiniz hizmetler...',
      submitButton: 'Mesaj Gönder',
      submitting: 'Gönderiliyor...',
      privacyNote:
        'Bilgileriniz kesinlikle gizli tutulur. En geç bir iş günü içinde yanıt veriyorum.',
      successTitle: 'Mesajınız Alındı!',
      successBodyPrefix: 'Teşekkürler, ',
      successBodySuffix:
        '. Proje detaylarınızı inceleyip en geç bir iş günü içinde size döneceğim.',
      sendAnother: 'Başka bir mesaj gönder',
      projectTypes: [
        'Yeni Konut İnşaatı',
        'Konut Renovasyonu',
        'Ticari İnşaat',
        'Ticari Renovasyon',
        'Endüstriyel / Depo',
        'Karma Kullanım Geliştirme',
        'Fizibilite Çalışması',
        'Diğer',
      ],
      budgetRanges: [
        '500K TL altı',
        '500K – 2M TL',
        '2M – 10M TL',
        '10M – 50M TL',
        '50M TL üzeri',
        'Henüz bilmiyorum',
      ],
    },
    contactInfo: [
      {
        icon: '📞',
        label: 'Telefon',
        value: '(303) 555-0147',
        href: 'tel:+13035550147',
        description: 'Pzt–Cum, 09:00–18:00',
      },
      {
        icon: '✉️',
        label: 'E-posta',
        value: 'james@harringtonconsulting.com',
        href: 'mailto:james@harringtonconsulting.com',
        description: 'En geç bir iş günü içinde yanıt',
      },
      {
        icon: '💬',
        label: 'WhatsApp',
        value: 'Doğrudan yazın',
        href: 'https://wa.me/13035550147?text=Merhaba%20James%2C%20%C3%BCcretsiz%20dan%C4%B1%C5%9Fmanl%C4%B1k%20g%C3%B6r%C3%BC%C5%9Fmesi%20planlamak%20istiyorum.',
        description: 'Hızlı sorular için',
      },
      {
        icon: '📍',
        label: 'Konum',
        value: 'Denver, CO',
        href: '',
        description: "Tüm ABD'ye hizmet veriyorum",
      },
    ],
  },
};

export default tr;
