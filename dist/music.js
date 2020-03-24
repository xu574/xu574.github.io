const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  lrcType: 0,
  audio: [
    {
      name: "你的答案",
      artist: '阿冗',
      url: 'http://m8.music.126.net/20200324220304/1eb2df7604fc543890b457ffb115311d/ymusic/545e/065a/530b/c413a59407100320b8f9da233b35f938.mp3',
      cover: 'https://s2.ax1x.com/2019/08/08/e7uwzn.png',
      //lrc: 'LRC/许巍-无尽光芒.lrc',
    },
    // {
    //   name: '第三极',
    //   artist: '许巍',
    //   url: 'http://www.ytmp3.cn/down/31601.mp3',
    //   cover: 'https://s2.ax1x.com/2019/08/08/e7M5VK.png',
    // },
    //{
    //  name: '曾经的你',
    //  artist: '许巍',
    //  url: 'http://www.ytmp3.cn/down/43808.mp3',
    //  cover: 'https://s2.ax1x.com/2019/08/08/e7M5VK.png',
    },
    
    // ,
    // {
    //   name: 'My Love',
    //   artist: 'Westlife',
    //   url: 'http://www.ytmp3.cn/down/50091.mp3',
    //   cover: 'https://s2.ax1x.com/2019/08/08/e7M5VK.png',
    // }
  ]
});
