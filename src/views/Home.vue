<template>
  <div>
    <Header></Header>
    <div class="home-container">

      <div class="home-main">

        <!-- 头部左边栏 -->
        <div class="left-aside">
          <ul>
            <li 
            class="left-aside-item left-aside-font-acitve" 
            @mouseenter="showContent = index"
            @mouseleave="showContent = -1"
            v-for="(item,index) in leftAside" 
            :key="index">
                <div>{{ item.title }}</div>
                <div class="left-aside-item-subtitle">{{ item.subtitle }}</div>
                <div v-if="showContent === 0" class="left-aside-item-content"></div>
                <div v-if="showContent === 1" class="left-aside-item-content"></div>
                <div v-if="showContent === 2" class="left-aside-item-content"></div>
                <div v-if="showContent === 3" class="left-aside-item-content"></div>
            </li>
          </ul>
        </div>

        <!-- 头部中间轮播图 -->
        <div class="carousel-container" @mouseenter="stopCarouselInterval" @mouseleave="startCarouselInterval">
          <div>


            <!-- 左转按钮 -->
            <transition name="left-btn">
              <div 
                v-show="carouselBtnShow" 
                @click="carouselTurnLeft"
                class="carousel-btn-left carousel-btn">
                <i class="el-icon-arrow-left"></i>
              </div>
            </transition>


            <!-- 轮播图 -->
            <div class="carousel-img">
              <img style="width: 100%;height:430px;z-index:1;" src="@/assets/carousel/image1.avif" alt="">
              <img style="width: 690px;height:430px;z-index:1;" src="@/assets/carousel/image2.avif" alt="">
              <img style="width: 690px;height:430px;z-index:1;" src="@/assets/carousel/image3.jpg" alt="">
              <img style="width: 690px;z-index:1;" src="@/assets/carousel/image4.jpg" alt="">
              <img style="width: 690px;height:430px;z-index:1;" src="@/assets/carousel/image1.avif" alt="">
            </div>
            

            <!-- 右转按钮 -->
            <transition name="right-btn">
              <div 
                v-show="carouselBtnShow" 
                @click="carouselTurnRight"
                class="carousel-btn-right carousel-btn">
                <i class="el-icon-arrow-right"></i>
              </div>
            </transition>
          
          </div>


          <!-- 底部小圆点 -->
          <div class="carousel-bottom" v-show="carouselBtnShow" >
            <ul class="carousel-list-dots">
              <li class="carousel-dot" :class="carouselIndex === 0 || carouselIndex === 4 ? 'carousel-dot-active' : ''" @click="carouselDotClick(0)">
                <div></div>
                <div></div>
              </li>
              <li class="carousel-dot" :class="carouselIndex === 1 ? 'carousel-dot-active' : ''" @click="carouselDotClick(1)">
                <div></div>
                <div></div>
              </li>
              <li class="carousel-dot" :class="carouselIndex === 2 ? 'carousel-dot-active' : ''" @click="carouselDotClick(2)">
                <div></div>
                <div></div>
              </li>
              <li class="carousel-dot" :class="carouselIndex === 3 ? 'carousel-dot-active' : ''" @click="carouselDotClick(3)">
                <div></div>
                <div></div>
              </li>
            </ul>
          </div>

        </div>
        
        <!-- 头部右边栏 -->
        <div class="right-aside">
          <ul>

            <!-- 广告 -->
            <li><a href=""><img width="80%" src="@/assets/right-aside-ad.gif" alt=""></a></li>

            <!-- 右边栏列表 -->
            <li class="right-aside-list-container">
              <div class="right-aside-list-title">
                <span style="margin-left:15px"><a href="">常用功能</a></span><span style="margin-left:122px"><a href=""><i class="el-icon-arrow-right"></i></a></span>
              </div>
              <div class="right-aside-list">
  
                <div class="right-aside-item">
                  <a href="">
                    <div class="right-aside-item-font"><img width="29px" src="@/assets/new.svg" alt=""></div>
                    <img width="50px" src="@/assets/right-aside-item/shopping.svg" alt=""><br>
                    <div>跳蚤市场</div>
                  </a>
                </div>

                <div class="right-aside-item">
                  <a href="">
                    <div class="right-aside-item-font"><img width="28px" src="@/assets/hot.svg" alt=""></div>
                    <img width="50px" src="@/assets/right-aside-item/equipment.svg" alt=""><br>
                    <div>装备</div>
                  </a>
                </div>

                <div class="right-aside-item">
                  <a href="">
                    <img width="50px" src="@/assets/right-aside-item/player.svg" alt=""><br>
                    <div>球星</div>
                  </a>
                </div>

                <div class="right-aside-item">
                  <a href="">
                    <img width="60px" src="@/assets/right-aside-item/competition.svg" alt=""><br>
                    <div>赛事</div>
                  </a>
                </div>
              </div>
            </li> 
            

            <!-- 右边栏场地预定 -->
            <li>
              <div class="right-reservation-container">
                <div class="right-aside-reservation">
                  <div style="position: absolute;top:8px;left: 20px;font-size: 20px;font-weight: 700;color:wheat">场地<br>预约</div>
                  <img style="position: absolute;top:8px;right: 20px;" width="50px" src="@/assets/reservation.svg" alt="">
                </div>
                <div class="right-aside-myreservation">
                  <div style="position: absolute;top:13px;left: 14px;color:white;">我的<br>预约</div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div class="home-body">
        <div class="body-news">
          <div class="body-title">
            <span style="margin-left: 20px"><a href="">校园资讯</a></span>
            <span style="float: right;margin-right: 20px;"><a href="">更多</a></span>
          </div>
          <div class="body-news-content">
            <ul>
              <li class="body-news-item">
                <a href="">
                  <div class="body-news-level">
                    <img width="500px;" height="300px;" src="@/assets/news-level.jpg" alt="">
                    <div style="margin-top:20px;font-size: 16px;color: #222;">中羽在线羽毛球技术水平分级标准:&nbsp;&nbsp;&nbsp;不仅热爱,更渴望变强！</div>
                    <span style="font-size: 14px;color: #888;font-weight: 500;">QAQ2008</span>
                    &nbsp;&nbsp;&nbsp;
                    <span style="font-size: 14px;color: #888;font-weight: 500;">2025-6-15</span>
                  </div>
                </a>
                
              </li>
              <li>
                <a href="">
                  <div class="body-news-daiyan">
                    <img width="300px;" src="@/assets/carousel/image3.jpg" alt="">
                    <div style="font-size: 16px;color: #222;">“以雷霆之名，铸雷霆80”,雷霆80代言!</div>
                    <span style="font-size: 14px;color: #888;font-weight: 500;">ChenLong</span>
                    &nbsp;&nbsp;&nbsp;
                    <span style="font-size: 14px;color: #888;font-weight: 500;">2025-5-12</span>
                  </div>
                </a>
                
              </li>
              <li>
                <a href="">
                  <div class="body-news-80light">
                    <img width="300px;" src="@/assets/news-80light.webp" alt="">
                    <div style="font-size: 16px;color: #222;">灵动闪击，晨曦之光 李宁「雷霆80Light」</div>
                    <span style="font-size: 14px;color: #888;font-weight: 500;">Lou</span>
                    &nbsp;&nbsp;&nbsp;
                    <span style="font-size: 14px;color: #888;font-weight: 500;">2025-2-7</span>
                  </div>
                </a>
                
              </li>
              <li>
                <a href="">
                  <div class="body-news-subei">
                    <img width="300px;" src="@/assets/news-subei.jpg" alt="">
                    <div style="font-size: 16px;color: #222;">与年轻队友一起征战苏杯 石宇奇: 全力守好自己这一分</div>
                    <span style="font-size: 14px;color: #888;font-weight: 500;">潮汐</span>
                    &nbsp;&nbsp;&nbsp;
                    <span style="font-size: 14px;color: #888;font-weight: 500;">2025-9-23</span>
                    <div style="font-size:14px;color: #111;font-weight: 400;">
                      “团体赛氛围不太一样，队友在场边加油，又是在主场，观众给我们加油，对我们在场上发挥更有帮助，就是想把这场比赛拿下来。”展望将于4月27日在厦门打响的2025年...
                    </div>
                  </div>
                </a>
              </li>
            </ul>

          </div>
        </div>

        <div class="body-campus">
          <div class="body-title">
            <span style="margin-left: 20px"><a href="">社区动态</a></span>
            <span style="float: right;margin-right: 20px;"><a href="">更多</a></span>
          </div>

          <div class="body-campus-container">
            <div class="campus-ranking">
              <h2>2025-6-21世界男单排名TOP10</h2>
              <table>
                <tbody>
                  <tr>
                    <td width="50px" align="center">1</td>
                    <td width="50px">
                      <div class="player-country">
                        <span>THA</span>
                        <img width="30px" src="@/assets/player/thailand.png" alt="">
                      </div>
                    </td>
                    <td width="200px">
                      <div style="width:200px">
                        <a href="">
                          <img class="face" src="@/assets/player/kunla.jpg" alt="">
                          <span style="float:left;padding-left:5px;color:#256EB1;font-size:15px">昆拉武特</span>
                          <span style="float:left;padding-left:5px;color:#999;font-size:12px">Kunlavut VITIDSARN</span>
                        </a>
                      </div>
                    </td>
                    <td width="20px" >
                      <div class="player-country">
                        <span>1</span>
                        <img width="15px" src="@/assets/player/arrow-up.png" alt="">
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td width="50px" align="center">2</td>
                    <td width="50px">
                      <div class="player-country">
                        <span>DEN</span>
                        <img width="30px" src="@/assets/player/denmark.png" alt="">
                      </div>
                    </td>
                    <td width="200px">
                      <div style="width:200px">
                        <a href="">
                          <img class="face" src="@/assets/player/andongsen.jpg" alt="">
                          <span style="float:left;padding-left:5px;color:#256EB1;font-size:15px">安德斯·安东森</span>
                          <span style="float:left;padding-left:5px;color:#999;font-size:12px">Anders Antonsen</span>
                        </a>
                      </div>
                    </td>
                    <td width="20px" align="right">
                      <div class="player-country">
                        <span>1</span>
                        <img width="15px" src="@/assets/player/arrow-up.png" alt="">
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td width="50px" align="center">3</td>
                    <td width="50px">
                      <div class="player-country">
                        <span>CHN</span>
                        <img width="30px" src="@/assets/player/china.png" alt="">
                      </div>
                    </td>
                    <td width="200px">
                      <div style="width:150px">
                        <a href="">
                          <img class="face" src="@/assets/player/shiyq.jpg" alt="">
                          <span style="float:left;padding-left:5px;color:#256EB1;font-size:15px">石宇奇</span>
                          <span style="float:left;padding-left:5px;color:#999;font-size:12px">Shi Yu Qi</span>
                        </a>
                      </div>
                    </td>
                    <td width="20px" align="right">
                      <div class="player-country">
                        <span>2</span>
                        <img width="15px" src="@/assets/player/arrow-down.png" alt="">
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td width="50px" align="center">4</td>
                    <td width="50px">
                      <div class="player-country">
                        <span>INA</span>
                        <img width="30px" src="@/assets/player/indonesia.png" alt="">
                      </div>
                    </td>
                    <td width="200px">
                      <div style="width:200px">
                        <a href="">
                          <img class="face" src="@/assets/player/qiaont.jpg" alt="">
                          <span style="float:left;padding-left:5px;color:#256EB1;font-size:15px">乔纳坦·克里斯蒂</span>
                          <span style="float:left;padding-left:5px;color:#999;font-size:12px">Jonatan Christie</span>
                        </a>
                      </div>
                    </td>
                    <td width="20px" align="center">-</td>
                  </tr>

                  <tr>
                    <td width="50px" align="center">5</td>
                    <td width="50px">
                      <div class="player-country">
                        <span>CHN</span>
                        <img width="30px" src="@/assets/player/denmark.png" alt="">
                      </div>
                    </td>
                    <td width="200px">
                      <div style="width:150px">
                        <a href="">
                          <img class="face" src="@/assets/player/lisf.jpg" alt="">
                          <span style="float:left;padding-left:5px;color:#256EB1;font-size:15px">李诗沣</span>
                          <span style="float:left;padding-left:5px;color:#999;font-size:12px">Li Shi Feng</span>
                        </a>
                      </div>
                    </td>
                    <td width="20px">
                      <div class="player-country">
                        <span>1</span>
                        <img width="15px" src="@/assets/player/arrow-up.png" alt="">
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td width="50px" align="center">6</td>
                    <td width="50px">
                      <div class="player-country">
                        <span>TPE</span>
                        <img width="30px" src="@/assets/player/chinesetaipei.png" alt="">
                      </div>
                    </td>
                    <td width="200px">
                      <div style="width:170px">
                        <a href="">
                          <img class="face" src="@/assets/player/zhoutc.jpg" alt="">
                          <span style="float:left;padding-left:5px;color:#256EB1;font-size:15px">周天成</span>
                          <span style="float:left;padding-left:5px;color:#999;font-size:12px">Zhou Tien Chen</span>
                        </a>
                      </div>
                    </td>
                    <td width="20px">
                      <div class="player-country">
                        <span>3</span>
                        <img width="15px" src="@/assets/player/arrow-up.png" alt="">
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td width="50px" align="center">7</td>
                    <td width="50px">
                      <div class="player-country">
                        <span>MAS</span>
                        <img width="30px" src="@/assets/player/malaysia.png" alt="">
                      </div>
                    </td>
                    <td width="200px">
                      <div style="width:150px">
                        <a href="">
                          <img class="face" src="@/assets/player/leezj.jpg" alt="">
                          <span style="float:left;padding-left:5px;color:#256EB1;font-size:15px">李梓嘉</span>
                          <span style="float:left;padding-left:5px;color:#999;font-size:12px">Lee Zii Jia</span>
                        </a>
                      </div>
                    </td>
                    <td width="20px" align="center">-</td>
                  </tr>

                  <tr>
                    <td width="50px" align="center">8</td>
                    <td width="50px">
                      <div class="player-country">
                        <span>DEN</span>
                        <img width="30px" src="@/assets/player/france.png" alt="">
                      </div>
                    </td>
                    <td width="200px">
                      <div style="width:200px">
                        <a href="">
                          <img class="face" src="@/assets/player/lane.jpg" alt="">
                          <span style="float:left;padding-left:5px;color:#256EB1;font-size:15px">亚历克斯·拉尼尔</span>
                          <span style="float:left;padding-left:5px;color:#999;font-size:12px">Alex Lanier</span>
                        </a>
                      </div>
                    </td>
                    <td width="20px">
                      <div class="player-country">
                        <span>2</span>
                        <img width="15px" src="@/assets/player/arrow-up.png" alt="">
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td width="50px" align="center">9</td>
                    <td width="50px">
                      <div class="player-country">
                        <span>DEN</span>
                        <img width="30px" src="@/assets/player/denmark.png" alt="">
                      </div>
                    </td>
                    <td width="200px">
                      <div style="width:170px">
                        <a href="">
                          <img class="face" src="@/assets/player/ansl.jpg" alt="">
                          <span style="float:left;padding-left:5px;color:#256EB1;font-size:15px">安赛龙</span>
                          <span style="float:left;padding-left:5px;color:#999;font-size:12px">Viktor Axelsen</span>
                        </a>
                      </div>
                    </td>
                    <td width="20px">
                      <div class="player-country">
                        <span>3</span>
                        <img width="15px" src="@/assets/player/arrow-down.png" alt="">
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td width="50px" align="center">10</td>
                    <td width="50px">
                      <div class="player-country">
                        <span>DEN</span>
                        <img width="30px" src="@/assets/player/singapore.png" alt="">
                      </div>
                    </td>
                    <td width="200px">
                      <div style="width:170px">
                        <a href="">
                          <img class="face" src="@/assets/player/lohjy.jpg" alt="">
                          <span style="float:left;padding-left:5px;color:#256EB1;font-size:15px">骆建佑</span>
                          <span style="float:left;padding-left:5px;color:#999;font-size:12px">LOH Kean Yew</span>
                        </a>
                      </div>
                    </td>
                    <td width="20px">
                      <div class="player-country">
                        <span>1</span>
                        <img width="15px" src="@/assets/player/arrow-up.png" alt="">
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>

              <transition name="ad">
                <div v-if="isShowAd" class="campus-ad">
                  <a href=""><img width="270px" src="@/assets/body-ad/longya2.jpg" alt=""></a>
                  <div @click="closeAd" class="campus-ad-off">广告 X</div>
                </div>
              </transition>
                

            </div>

            <div class="campus-dynamics">
              <ul>
                <li>
                  <a href="">
                    <img width="170px" height="100px" src="@/assets/body-campus/25china.webp" alt="">
                    <div style="margin-left: 10px">
                      <div class="campus-dynamics-item">
                        <h3 >2025年中国公开赛名单出炉 石宇奇陈雨菲领衔出战</h3>
                        <span class="intro">2025年中国羽毛球公开赛(超级1000)名单出炉，国羽全主力出战，比赛将于7月22日-27日在中国常州举行，总奖金200万美元...</span>
                      </div>
                      <div style="margin-top:5px;color: #aaa;font-size: 12px;">
                        <span>2025-06-29 &nbsp;&nbsp;</span>
                        <img class="zan" src="@/assets/body-campus/good.gif" alt=""><span>388&nbsp;&nbsp;</span>
                        <img class="cai" src="@/assets/body-campus/bad.gif" alt=""><span>12&nbsp;&nbsp;</span>
                        <img class="comm" src="@/assets/body-campus/pj.png" alt=""><span>327&nbsp;&nbsp;</span>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="">
                    <img width="170px" height="100px" src="@/assets/body-campus/25china.webp" alt="">
                    <div style="margin-left: 10px">
                      <div class="campus-dynamics-item">
                        <h3>2025年中国公开赛名单出炉 石宇奇陈雨菲领衔出战</h3>
                        <span class="intro">2025年中国羽毛球公开赛(超级1000)名单出炉，国羽全主力出战，比赛将于7月22日-27日在中国常州举行，总奖金200万美元...</span>
                      </div>
                      <div style="margin-top:5px;color: #aaa;font-size: 12px;">
                        <span>2025-06-29 &nbsp;&nbsp;</span>
                        <img class="zan" src="@/assets/body-campus/good.gif" alt=""><span>388&nbsp;&nbsp;</span>
                        <img class="cai" src="@/assets/body-campus/bad.gif" alt=""><span>12&nbsp;&nbsp;</span>
                        <img class="comm" src="@/assets/body-campus/pj.png" alt=""><span>327&nbsp;&nbsp;</span>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="">
                    <img width="170px" height="100px" src="@/assets/body-campus/25china.webp" alt="">
                    <div style="margin-left: 10px">
                      <div class="campus-dynamics-item">
                        <h3>2025年中国公开赛名单出炉 石宇奇陈雨菲领衔出战</h3>
                        <span class="intro">2025年中国羽毛球公开赛(超级1000)名单出炉，国羽全主力出战，比赛将于7月22日-27日在中国常州举行，总奖金200万美元...</span>
                      </div>
                      <div style="margin-top:5px;color: #aaa;font-size: 12px;">
                        <span>2025-06-29 &nbsp;&nbsp;</span>
                        <img class="zan" src="@/assets/body-campus/good.gif" alt=""><span>388&nbsp;&nbsp;</span>
                        <img class="cai" src="@/assets/body-campus/bad.gif" alt=""><span>12&nbsp;&nbsp;</span>
                        <img class="comm" src="@/assets/body-campus/pj.png" alt=""><span>327&nbsp;&nbsp;</span>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="">
                    <img width="170px" height="100px" src="@/assets/body-campus/25china.webp" alt="">
                    <div style="margin-left: 10px">
                      <div class="campus-dynamics-item">
                        <h3>2025年中国公开赛名单出炉 石宇奇陈雨菲领衔出战</h3>
                        <span class="intro">2025年中国羽毛球公开赛(超级1000)名单出炉，国羽全主力出战，比赛将于7月22日-27日在中国常州举行，总奖金200万美元...</span>
                      </div>
                      <div style="margin-top:5px;color: #aaa;font-size: 12px;">
                        <span>2025-06-29 &nbsp;&nbsp;</span>
                        <img class="zan" src="@/assets/body-campus/good.gif" alt=""><span>388&nbsp;&nbsp;</span>
                        <img class="cai" src="@/assets/body-campus/bad.gif" alt=""><span>12&nbsp;&nbsp;</span>
                        <img class="comm" src="@/assets/body-campus/pj.png" alt=""><span>327&nbsp;&nbsp;</span>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="">
                    <img width="170px" height="100px" src="@/assets/body-campus/25china.webp" alt="">
                    <div style="margin-left: 10px">
                      <div class="campus-dynamics-item">
                        <h3>2025年中国公开赛名单出炉 石宇奇陈雨菲领衔出战</h3>
                        <span class="intro">2025年中国羽毛球公开赛(超级1000)名单出炉，国羽全主力出战，比赛将于7月22日-27日在中国常州举行，总奖金200万美元...</span>
                      </div>
                      <div style="margin-top:5px;color: #aaa;font-size: 12px;">
                        <span>2025-06-29 &nbsp;&nbsp;</span>
                        <img class="zan" src="@/assets/body-campus/good.gif" alt=""><span>388&nbsp;&nbsp;</span>
                        <img class="cai" src="@/assets/body-campus/bad.gif" alt=""><span>12&nbsp;&nbsp;</span>
                        <img class="comm" src="@/assets/body-campus/pj.png" alt=""><span>327&nbsp;&nbsp;</span>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="">
                    <img width="170px" height="100px" src="@/assets/body-campus/25china.webp" alt="">
                    <div style="margin-left: 10px">
                      <div class="campus-dynamics-item">
                        <h3>2025年中国公开赛名单出炉 石宇奇陈雨菲领衔出战</h3>
                        <span class="intro">2025年中国羽毛球公开赛(超级1000)名单出炉，国羽全主力出战，比赛将于7月22日-27日在中国常州举行，总奖金200万美元...</span>
                      </div>
                      <div style="margin-top:5px;color: #aaa;font-size: 12px;">
                        <span>2025-06-29 &nbsp;&nbsp;</span>
                        <img class="zan" src="@/assets/body-campus/good.gif" alt=""><span>388&nbsp;&nbsp;</span>
                        <img class="cai" src="@/assets/body-campus/bad.gif" alt=""><span>12&nbsp;&nbsp;</span>
                        <img class="comm" src="@/assets/body-campus/pj.png" alt=""><span>327&nbsp;&nbsp;</span>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="">
                    <img width="170px" height="100px" src="@/assets/body-campus/25china.webp" alt="">
                    <div style="margin-left: 10px">
                      <div class="campus-dynamics-item">
                        <h3>2025年中国公开赛名单出炉 石宇奇陈雨菲领衔出战</h3>
                        <span class="intro">2025年中国羽毛球公开赛(超级1000)名单出炉，国羽全主力出战，比赛将于7月22日-27日在中国常州举行，总奖金200万美元...</span>
                      </div>
                      <div style="margin-top:5px;color: #aaa;font-size: 12px;">
                        <span>2025-06-29 &nbsp;&nbsp;</span>
                        <img class="zan" src="@/assets/body-campus/good.gif" alt=""><span>388&nbsp;&nbsp;</span>
                        <img class="cai" src="@/assets/body-campus/bad.gif" alt=""><span>12&nbsp;&nbsp;</span>
                        <img class="comm" src="@/assets/body-campus/pj.png" alt=""><span>327&nbsp;&nbsp;</span>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="">
                    <img width="170px" height="100px" src="@/assets/body-campus/25china.webp" alt="">
                    <div style="margin-left: 10px">
                      <div class="campus-dynamics-item">
                        <h3>2025年中国公开赛名单出炉 石宇奇陈雨菲领衔出战</h3>
                        <span class="intro">2025年中国羽毛球公开赛(超级1000)名单出炉，国羽全主力出战，比赛将于7月22日-27日在中国常州举行，总奖金200万美元...</span>
                      </div>
                      <div style="margin-top:5px;color: #aaa;font-size: 12px;">
                        <span>2025-06-29 &nbsp;&nbsp;</span>
                        <img class="zan" src="@/assets/body-campus/good.gif" alt=""><span>388&nbsp;&nbsp;</span>
                        <img class="cai" src="@/assets/body-campus/bad.gif" alt=""><span>12&nbsp;&nbsp;</span>
                        <img class="comm" src="@/assets/body-campus/pj.png" alt=""><span>327&nbsp;&nbsp;</span>
                      </div>
                    </div>
                  </a>
                </li>

              </ul>
              
            </div>

          </div>
          

        </div>

      </div>

    </div>

    <Footer></Footer>

  </div>
</template>



<script>

//引入样式文件
import '@/styles/home.css'

export default {
    name: 'Home',

    data(){
      return {

        // 左侧边栏数据
        leftAside:[
          {title:'资讯推荐',subtitle: '球友都在看的   中羽分级'},
          {title:'热门比赛',subtitle: '羽联赛事    世界排名'},
          {title:'最新活动',subtitle: '开箱评测    新品推荐'},
          {title:'了解更多',subtitle: '精彩事项'},
        ],
        showContent: -1,

        // 轮播图数据
        carouselIndex: 0,
        carouselBtnShow: false,
        carouselInterval: null,

        //广告关闭
        isShowAd: true
      }
    },

    computed:{

      //返回轮播图应该移动的距离
      carouselTransform(){
        return `translateX(-${this.carouselIndex * 690}px)`
      }
    },

    methods: {
      // 轮播图右转
      carouselTurnRight(){
        this.carouselIndex = this.carouselIndex + 1 
        const carouselDiv = document.querySelector('.carousel-img')
        if (!carouselDiv) return
        carouselDiv.style.transform = this.carouselTransform
        carouselDiv.style.transition = `All 0.4s linear`
        if(this.carouselIndex === 4){
          setTimeout(() => {
            this.carouselIndex = 0
            carouselDiv.style.transform = `translateX(0px)`
            carouselDiv.style.transition = `All 0s`
          },400)
        }
      },
      // 轮播图左转
      carouselTurnLeft(){
        const carouselDiv = document.querySelector('.carousel-img')

        if(this.carouselIndex === 0){
            this.carouselIndex = 4
            carouselDiv.style.transform = this.carouselTransform
            carouselDiv.style.transition = `All 0s`
        }
        setTimeout(() => {
          this.carouselIndex = this.carouselIndex - 1
          carouselDiv.style.transform = this.carouselTransform
          carouselDiv.style.transition = `All 0.4s linear`
        },0)
      },

      // 鼠标移入轮播图停止轮播图自动播放
      stopCarouselInterval(){
        if(this.carouselInterval){
          clearInterval(this.carouselInterval)
          this.carouselInterval = null
        }

        // 鼠标移入轮播图时显示轮播图左右按钮
        this.carouselBtnShow = true
      },

      // 鼠标移出轮播图重新开始轮播图自动播放
      startCarouselInterval(){
        if(!this.carouselInterval){
          this.carouselInterval = setInterval(() => {
            this.carouselTurnRight()
          }, 5000)
        }

        // 鼠标移入轮播图时隐藏轮播图左右按钮
        this.carouselBtnShow = false
      },

      // 轮播图小圆点点击事件
      carouselDotClick(index){
        this.carouselIndex = index
        const carouselDiv = document.querySelector('.carousel-img')
        carouselDiv.style.transform = this.carouselTransform
      },

      //关闭广告
      closeAd(){
        this.isShowAd = false
      }
    },

    watch: {
    },

    mounted(){
      // 轮播图自动播放
      this.carouselInterval = setInterval(() => {
        this.carouselTurnRight()
      }, 5000)
    },

    beforeDestroy(){
      // 清除轮播图自动播放定时器
      console.log('beforeDestroy')
      clearInterval(this.carouselInterval)
    }
}
</script>



<style scoped>
</style>