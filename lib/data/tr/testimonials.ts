import type { Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "David Chen",
    role: "Gayrimenkul Geliştirici",
    company: "Chen Property Group",
    content:
      "James, genel müteahhidimizin gözden kaçırdığı kritik bir su yalıtımı kusurunun temel aşamasında tespit etti. O aşamada düzeltmek bize 8.000 dolara mal oldu. Plak döküldükten sonra keşfedilseydi on katını öder, belki de o kadarla kurtulamazdık. Danışmanlık ücreti ilk ayda kendini amorti etti.",
    rating: 5,
    projectType: "Konut Geliştirme",
  },
  {
    id: "2",
    name: "Sarah Mitchell",
    role: "Özel Konut Sahibi",
    content:
      "İnşaat geçmişi olmadan 2 milyon dolarlık özel bir ev projesi yönetmekten çekiniyordum. James, 14 ay boyunca hem tercümanım hem savunucum hem de erken uyarı sistemim oldu. Hiçbir zaman derinliğimi aşmış gibi hissetmedim; biten ev de tam hayal ettiğimiz gibi — ve bütçe dahilinde.",
    rating: 5,
    projectType: "Özel Konut",
  },
  {
    id: "3",
    name: "Marcus O'Brien",
    role: "Operasyon Direktörü",
    company: "Pinnacle Logistics",
    content:
      "Bir önceki depo projemizde bütçenin %30 üstüne çıkmıştık. Bu sefer James'i en baştan dahil ettik. Müteahhit değerlendirme süreci, tekliflerdeki büyük değişiklik emirlerine zemin hazırlayacak varsayımları gün yüzüne çıkardı. Çok daha bilinçli bir karar verdik; proje de hedeflenen bütçede tamamlandı.",
    rating: 5,
    projectType: "Endüstriyel / Depo",
  },
];
