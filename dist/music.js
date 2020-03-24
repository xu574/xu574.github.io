const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  lrcType: 0,
  audio: [
    {
      name: "你的答案",
      artist: '阿冗',
      url: 'https://m10.music.126.net/20200325042528/ec1388ede86bf2271e83e9ac60508741/yyaac/5608/555a/005c/ab410f7bbbb0955e7ae476ae89527a5d.m4a',
      cover: 'https://s2.ax1x.com/2019/08/08/e7uwzn.png',
      //lrc: 'LRC/许巍-无尽光芒.lrc',
    },
     {
       name: '处处吻',
       artist: '杨千嬅',
       url: 'https://m701.music.126.net/20200325041823/fed215a862dc2c0c729a77665e9afa94/jdyyaac/045b/0159/035e/31386574a663a54000ec44c5362d292c.m4a',
       cover: 'https://pic.qqtn.com/up/2019-10/201910151315584993.png',
    // },
    //{
    //  name: '曾经的你',
    //  artist: '许巍',
    //  url: 'http://www.ytmp3.cn/down/43808.mp3',
    //  cover: 'https://s2.ax1x.com/2019/08/08/e7M5VK.png',
    //},
    
    // ,
     {
       name: 'Don"t Cha',
       artist: 'Daneliya Tuleshova',
       url: 'https://m10.music.126.net/20200325041447/82f3abde7b20696d7ffa133933e89e43/yyaac/0058/0f08/5653/7277cc2df18bc660cac2a93d73e90c4d.m4a',
       cover: 'https://pic.qqtn.com/up/2019-10/201910151315584993.png',
    // }
  ]
});
