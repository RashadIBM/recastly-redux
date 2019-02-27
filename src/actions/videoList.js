var changeVideoList = videos => ({
  type: 'CHANGE_VIDEO_LIST',
  videos
});

export default changeVideoList;

// var changeVideoList = function (videos) {
//   //TODO:  Return some action object to change the list of videos in VideoList.
//   return {
//     type: 'CHANGE_VIDEO_LIST',
//     videos: videos
//   };
// };
