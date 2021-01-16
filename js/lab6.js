'use strict';


// 1)
let contactsButtonElem = document.getElementById('contacts-button');
contactsButtonElem.onclick = function() {
    let contactsBlock = document.getElementById("contacts").cloneNode(true);
    contactsBlock.setAttribute("id", "contacts-block");
    let style = contactsBlock.style;

    style.position = "fixed";
    style.zIndex = "200";
    style.top = "30px";
    style.left = "50%";
    style.transform = "translateX(-50%)";
    style.backgroundColor = "#f6fefc";
    style.padding = "10px";
    style.borderRadius = "5px";
    style.color = "#001e18";

    let h2 = contactsBlock.children[0];
    h2.style.color = "#001e18";

    let shadow = document.createElement('div');
    shadow.onclick = function() {
        let contactsBlock = document.getElementById("contacts-block");
        contactsBlock.remove();
        this.remove();
    };
    let shadowStyle = shadow.style;
    shadowStyle.backgroundColor = "rgba(0,0,0,.3)";
    shadowStyle.height = "100%";
    shadowStyle.position = "fixed";
    shadowStyle.zIndex = "100";
    shadowStyle.width = "100%";
    shadowStyle.top = "0";
    shadowStyle.left = "0";

    let header = document.getElementsByTagName("header")[0];
    header.append(shadow);
    header.append(contactsBlock);
};


// 2)
const MY_PHOTOS_NUM = 2;
const MY_PHOTOS_FOLDER = "resources/my-photos/";
let curMyPhoto = 1;
let myPhotoElem = document.getElementById('my-photo');
myPhotoElem.onclick = function () {
    curMyPhoto = (curMyPhoto + 1) % MY_PHOTOS_NUM;
    this.setAttribute('src', MY_PHOTOS_FOLDER + curMyPhoto + ".jpg");
};
