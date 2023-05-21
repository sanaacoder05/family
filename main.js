var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/xTwm271m/download.jpg","https://i.postimg.cc/FFfgX0V2/download.jpg","https://i.postimg.cc/NFG3LpG7/images.jpg","https://i.postimg.cc/Ssd50CLX/download.jpg"];
var names = ["Fmaily Book","sanaa", "varsha", "krithika",  "latha"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }

    var updatedImage = images[i];

    var updatedName =names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
