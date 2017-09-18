let friends = [ {name: "Kim", imageurl: "https://pbs.twimg.com/profile_images/875432723837362176/j5NOs7Dj_400x400.jpg", questions: [1,1,1,1,1,1,1,1,1,1]},
    {name: "Joe", imageurl: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/review_gallery_carousel_slide_thumbnail/public/screenshots/csm-movie/joedirtscreenshot2.jpg?itok=-Id5UPBV", questions: [2,2,2,2,2,2,2,2,2,2]},
    {name: "Mary", imageurl: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-theres-something-about-mary-cameron-diaz.jpg", questions: [3,3,3,3,3,3,3,3,3,3]},
    {name: "Dawn", imageurl: "http://i.dailymail.co.uk/i/pix/2015/10/26/01/1E23043000000578-3288643-Dawn_French_has_revealed_that_she_could_no_longer_live_with_her_-a-4_1445822339907.jpg", questions: [4,4,4,4,4,4,4,4,4,4]},
    {name: "Robert", imageurl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY317_CR13,0,214,317_AL_.jpg", questions: [5,5,5,5,5,5,5,5,5,5]},
    {name: "Susan", imageurl: "https://pbs.twimg.com/profile_images/686633235393163266/cq_ikTmA.jpg", questions: [1,2,1,2,1,2,1,2,1,2]}];

function getFriends(){
    return friends;

}
function getBestMatch(friend){
    return friends[0];
}
function setNewFriend(friend){
    friends.push(friend)
}
module.exports = {
    getBestMatch: getBestMatch,
    setNewFriend: setNewFriend,
    getFriends: getFriends
}