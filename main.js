function start() {
    // create hidden canvas for rendering
    EmotePlayer.createRenderCanvas(1024, 1024);

/*
    // EmoteDevice is a class that manages shaders and GPU resources necessary for drawing Emote.
    // EmotePlayer automatically creates an instance of EmoteDevice on its own generation.
    // However, generating EmoteDevice is a bit heavy processing.
    // EmoteDevice creation / destruction is performed every time when EmotePlayer is generated / destroyed, 
    // so that an unnecessary extra load is applied.
    // Therefore, for applications that repeatedly generate and destroy EmotePlayer, 
    // it is recommended to explicitly generate EmoteDevice by inserting the following sentence.
    EmotePlayer.requireDevice();
*/

    // create new player
    const canvas = document.getElementById('canvas');
    const player = new EmotePlayer(canvas);
    // load emote data from URL
    player.loadDataFromURL("data/emote_test2.emtbytes");
    // set chara scale
    player.scale = 0.3;
    // play test timeline
    player.mainTimelineLabel = 'sample_全自動_test';
}

