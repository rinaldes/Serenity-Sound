const cdn = process.env.NEXT_PUBLIC_CDN_API;
const cdnEnhance = cdn + "/e_enhance";

const rawCoverImage = `${cdnEnhance}/e_gen_restore/f_auto/Serenity/ankrqsdcl9dlyiwo4wed.jpg`;
const rawCoverMobile = `${cdnEnhance}/e_gen_restore/ar_1:2,c_auto,g_auto,h_1.00/f_auto/Serenity/ankrqsdcl9dlyiwo4wed.jpg`;
const rawLibrary1 = `${cdnEnhance}/f_auto/Serenity/pcb3ivpv7fz49ve0ekfy.jpg`;
const rawLibrary2 = `${cdnEnhance}/f_auto/Serenity/uxrvxhq6sa97mglgl7kh.jpg`;
const rawImage1 = `${cdnEnhance}/f_auto/Serenity/gjp9zfphuopcgweu9gxs.jpg`;
const rawTheApp = `${cdn}/f_auto/Serenity/jqbnquroruwrx8076pzu.jpg`;
const rawAppDev = `${cdn}/f_auto/Serenity/itdsuw5vplnsarevr08y.jpg`;
const rawAudioSpes = `${cdn}/f_auto/Serenity/xjdbrtcrrjmhcdujniiu.jpg`;
const rawMusicCur = `${cdn}/f_auto/Serenity/qldpsru6seorrqfawczq.jpg`;
const rawTheTeam = `${cdnEnhance}/f_auto/Serenity/p0tof3wa77wxeq4adjyd.jpg`;
const rawMusicShare = `${cdnEnhance}/f_auto/Serenity/q6fnewnmfqvoq6pzkp7z.jpg`;
const rawWalking = `${cdnEnhance}/f_auto/Serenity/rlkd9ldfuhwg3s1naw9k.jpg`;
const rawSubscribe = `${cdnEnhance}/f_auto/Serenity/motytlv8ar0gofxme99p.jpg`;
const rawSerenityLogo = `${cdn}/f_webp/e_improve:outdoor/Serenity/zuehemfwgnjitliavvpf.jpg`;
const rawSerenityLogoBig = `${cdn}/f_webp/e_improve:outdoor/Serenity/qdx0tz6myaesmso1howm.jpg`;

/* 
TODO : Change the size of the image
*/

export const CoverImage = {
  src: rawCoverImage,
  srcAlt: rawCoverMobile,
  width: 1344,
  height: 768,
};

export const Library1 = {
  src: rawLibrary1,
  width: 1024,
  height: 1024,
};

export const Library2 = {
  src: rawLibrary2,
  width: 1024,
  height: 1024,
};

export const Image1 = {
  src: rawImage1,
  width: 1152,
  height: 896,
};

export const TheApp = {
  src: rawTheApp,
  width: 1024,
  height: 1063,
};

export const AppDev = {
  src: rawAppDev,
  width: 1024,
  height: 1024,
};

export const AudioSpes = {
  src: rawAudioSpes,
  width: 1024,
  height: 1024,
};

export const MusicCur = {
  src: rawMusicCur,
  width: 1024,
  height: 1024,
};

export const TheTeam = {
  src: rawTheTeam,
  width: 1344,
  height: 768,
};

export const MusicShare = {
  src: rawMusicShare,
  width: 1152,
  height: 896,
};

export const Walking = {
  src: rawWalking,
  width: 1152,
  height: 896,
};

export const Subscribe = {
  src: rawSubscribe,
  width: 1152,
  height: 896,
};

export const SerenityLogo = {
  src: rawSerenityLogo,
  width: 50,
  height: 50,
};

export const SerenityLogoBig = {
  src: rawSerenityLogoBig,
  width: 500,
  height: 500,
};
