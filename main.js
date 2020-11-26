function start() {
    // create hidden canvas for rendering
    EmotePlayer.createRenderCanvas(2048, 2048);

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

    // create new player nomal_size
    const canvas_nomal = document.getElementById('canvas_nomal');
    const player_nomal = new EmotePlayer(canvas_nomal);
    // load emote data from URL
    player_nomal.loadDataFromURL("data/emote_asobirin_normal.emtbytes");
    // set chara scale
    player_nomal.scale = 1;
    // play test timeline
    player_nomal.mainTimelineLabel = 'sample_全自動_test';

    // create new player small_size
    const canvas_small = document.getElementById('canvas_small');
    const player_small = new EmotePlayer(canvas_small);
    // load emote data from URL
    player_small.loadDataFromURL("data/emote_asobirin_normal.emtbytes");
    // set chara scale
    player_small.scale = 0.6;
    // play test timeline
    player_small.mainTimelineLabel = 'sample_全自動_test';


}

