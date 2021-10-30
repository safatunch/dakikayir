<template>
<div>
    <comment v-for="Comment in Comments" :key="Comment.Id" :Comment="Comment"></comment>
</div>
</template>

<script>
import Comment from './Single.vue'
export default {
  name: 'CommentList',
  data () {
    return {
      Comments: [{
        Id: 1,
        Comment: 'Paris te beğendiğim yapılardan bir tanesi. Gerçekten guzel bir noktadan resim çekerseniz bir havası bir güzellik var. Yuruyerek çıkmak çok zor ama asansor sırasında da çok bekliyorsunuz. Çıkıp görmek için ciddi yüksek rakam ödüyorsunuz ama değer. Paris e gidip buraya gitmez iseniz Paris i gezdim diyemezsiniz. Mayis ayı Paris icin soğuk ve en güzel dönem temmuz ve ağustos. Paris çok.mu guzel derseniz bence değil lakin Paris Kuzey Afrika olmuş. Fransız milleti maalesef soğuk bir millet dolayisiyla bir daha gidermiyim diye sorarsanız sadece cocuklar için Disneyland a giderim. Paris te beğendiğim yapılardan bir tanesi. Gerçekten guzel bir noktadan resim çekerseniz bir havası bir güzellik var. Yuruyerek çıkmak çok zor ama asansor sırasında da çok bekliyorsunuz. Çıkıp görmek için ciddi yüksek rakam ödüyorsunuz ama değer. Paris e gidip buraya gitmez iseniz Paris i gezdim diyemezsiniz. Mayis ayı Paris icin soğuk ve en güzel dönem temmuz ve ağustos. Paris çok.mu guzel derseniz bence değil lakin Paris Kuzey Afrika olmuş. Fransız milleti maalesef soğuk bir millet dolayisiyla bir daha gidermiyim diye sorarsanız sadece cocuklar için Disneyland a giderim.',
        Owner: 'Safa Tunç',
        Photo: 'https://i.pinimg.com/originals/a3/9b/46/a39b46106646c596800621b698abae73.jpg',
        Star: 2
      },
      {
        Id: 2,
        Comment: 'Günümüzden 132 yıl önce inşa edilen ve dönemi için büyük yankı uyandıran Eyfel Kulesi, aradan geçen zamana karşın cazibesini hiç yitirmedi. Sadece Fransanın değil dünyanın en önemli turizm noktalarından biri olan kuleyi bilmeyen yoktur. Peki yüksekliğini bilen var mı? Haydi siz tahminleri yorumlara yazın ben de hikayesini anlatayım.',
        Owner: 'Ronaldo LongNamed',
        Photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ba-yMeNs56w1GFpHLQtsmgbO9N-m5mrFVoZ8-zJXLm__8Oj5lTQQJZTPYwi0H9Ce6mk&usqp=CAU',
        Star: 3.5
      }
      ]
    }
  },
  components: {
    Comment
  }
}
</script>
