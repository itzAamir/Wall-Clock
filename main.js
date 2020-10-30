setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    // console.log(htime, mtime, stime)
    hRot = 30*htime + mtime/2;
    mRot = 6*mtime;
    sRot = 6*stime;

    hour.style.transform = `rotate(${hRot}deg)`;
    minute.style.transform = `rotate(${mRot}deg)`;
    seconds.style.transform = `rotate(${sRot}deg)`;

}, 1000);

