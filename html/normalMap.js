
import * as THREE from './node_modules/three/build/three.module.js';

function Charibert(model){

    const normalMap_etc_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/etc-Charibert_n.png' );
    const normalMap_hair_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/hair-Charibert_n.png' );
    const normalMap_hair2_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/hair2-Charibert_n.png' );
    normalMap_etc_Charibert.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_hair_Charibert.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_hair2_Charibert.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_body = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/body_n.png' );
    const normalMap_eyes = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/yan_n.png' );
    const normalMap_face_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/face-Charibert_n.png' );
    normalMap_body.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_eyes.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_face_Charibert.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_top_cangqiong_faxi = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/top_cangqiong_faxi_n.png' );
    const normalMap_glv_cangqiong_faxi = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/glv_cangqiong_faxi_n.png' );
    const normalMap_dwn_cangqiong = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/dwn_cangqiong_n.png' );
    const normalMap_sho_cangqiong = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/sho_cangqiong_n.png' );	
    normalMap_top_cangqiong_faxi.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_glv_cangqiong_faxi.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_dwn_cangqiong.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_sho_cangqiong.wrapT   = THREE.MirroredRepeatWrapping;

    model.material[0].normalMap = normalMap_body;
    model.material[1].normalMap = normalMap_glv_cangqiong_faxi;
    model.material[2].normalMap = normalMap_top_cangqiong_faxi;
    model.material[2].normalScale.set(5, 5);
    model.material[3] = model.material[2];
    model.material[4] = model.material[2];
    model.material[5] = model.material[2];
    model.material[6] = model.material[2];
    model.material[7] = model.material[2];
    model.material[8] = model.material[2];
    model.material[9] = model.material[2];
    model.material[10].normalMap = normalMap_top_cangqiong_faxi;
    model.material[11] = model.material[2];
    model.material[12] = model.material[2];
    model.material[13].normalMap = normalMap_top_cangqiong_faxi;
    model.material[14].normalMap = normalMap_top_cangqiong_faxi;
    model.material[15] = model.material[2];
    model.material[16] = model.material[2];
    model.material[17] = model.material[2];
    model.material[18] = model.material[2];
    model.material[19].normalMap = normalMap_top_cangqiong_faxi;
    model.material[20].normalMap = normalMap_top_cangqiong_faxi;
    model.material[21] = model.material[2];
    model.material[22] = model.material[2];
    model.material[23] = model.material[2];
    model.material[24].normalMap = normalMap_top_cangqiong_faxi;
    model.material[24].normalScale.set(5, 5);
    model.material[25].normalMap = normalMap_dwn_cangqiong;
    model.material[26].normalMap = normalMap_dwn_cangqiong;
    model.material[27].normalMap = normalMap_dwn_cangqiong;
    model.material[28].normalMap = normalMap_dwn_cangqiong;
    model.material[29].normalMap = normalMap_sho_cangqiong;
    model.material[30].normalMap = normalMap_sho_cangqiong;
    model.material[31].normalMap = normalMap_face_Charibert;
    model.material[32].normalMap = normalMap_eyes;
    model.material[33].normalMap = normalMap_face_Charibert;
    model.material[34].normalMap = normalMap_face_Charibert;
    model.material[34].normalMap = normalMap_face_Charibert;
    model.material[35].normalMap = normalMap_face_Charibert;
    model.material[36].normalMap = normalMap_face_Charibert;
    model.material[37].normalMap = normalMap_face_Charibert;
    model.material[38].normalMap = normalMap_face_Charibert;
    model.material[39].normalMap = normalMap_etc_Charibert;
    model.material[40].normalMap = normalMap_etc_Charibert;
    model.material[41].normalMap = normalMap_etc_Charibert;
    model.material[41].normalScale.set(5, 5);
    model.material[42].normalMap = normalMap_hair2_Charibert;
    model.material[42].normalScale.set(5, 5);
    model.material[43].normalMap = normalMap_hair_Charibert;
    model.material[43].normalScale.set(5, 5);
}
function Haumeric(model){
    const normalMap_etc_Haumeric = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/etc-Haumeric_n.png' );
    normalMap_etc_Haumeric.wrapT   = THREE.MirroredRepeatWrapping;
    const normalMap_hair_Haumeric = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/hair-Haumeric_n.png' );
    normalMap_hair_Haumeric.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_body = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/body_n.png' );
    const normalMap_eyes = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/yan_n.png' );
    const normalMap_face_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/face-Charibert_n.png' );
    normalMap_body.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_eyes.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_face_Charibert.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_top_cangqiong_faxi = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/top_cangqiong_faxi_n.png' );
    const normalMap_glv_cangqiong_faxi = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/glv_cangqiong_faxi_n.png' );
    const normalMap_dwn_cangqiong = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/dwn_cangqiong_n.png' );
    const normalMap_sho_cangqiong = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/sho_cangqiong_n.png' );	
    normalMap_top_cangqiong_faxi.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_glv_cangqiong_faxi.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_dwn_cangqiong.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_sho_cangqiong.wrapT   = THREE.MirroredRepeatWrapping;

    model.material[0].normalMap = normalMap_body;
    model.material[1].normalMap = normalMap_glv_cangqiong_faxi;
    model.material[2].normalMap = normalMap_top_cangqiong_faxi;
    model.material[2].normalScale.set(5, 5);
    model.material[3] = model.material[2];
    model.material[4] = model.material[2];
    model.material[5] = model.material[2];
    model.material[6] = model.material[2];
    model.material[7] = model.material[2];
    model.material[8] = model.material[2];
    model.material[9] = model.material[2];
    model.material[10].normalMap = normalMap_top_cangqiong_faxi;
    model.material[11] = model.material[2];
    model.material[12] = model.material[2];
    model.material[13].normalMap = normalMap_top_cangqiong_faxi;
    model.material[14].normalMap = normalMap_top_cangqiong_faxi;
    model.material[15] = model.material[2];
    model.material[16] = model.material[2];
    model.material[17] = model.material[2];
    model.material[18] = model.material[2];
    model.material[19].normalMap = normalMap_top_cangqiong_faxi;
    model.material[20].normalMap = normalMap_top_cangqiong_faxi;
    model.material[21] = model.material[2];
    model.material[22] = model.material[2];
    model.material[23] = model.material[2];
    model.material[24].normalMap = normalMap_top_cangqiong_faxi;
    model.material[24].normalScale.set(5, 5);
    model.material[25].normalMap = normalMap_dwn_cangqiong;
    model.material[26].normalMap = normalMap_dwn_cangqiong;
    model.material[27].normalMap = normalMap_dwn_cangqiong;
    model.material[28].normalMap = normalMap_dwn_cangqiong;
    model.material[29].normalMap = normalMap_sho_cangqiong;
    model.material[30].normalMap = normalMap_sho_cangqiong;
    model.material[31].normalMap = normalMap_face_Charibert;
    model.material[32].normalMap = normalMap_face_Charibert;
    model.material[33].normalMap = normalMap_face_Charibert;
    model.material[34].normalMap = normalMap_face_Charibert;
    model.material[35].normalMap = normalMap_eyes;
    model.material[36].normalMap = normalMap_etc_Haumeric
    model.material[37].normalMap = normalMap_etc_Haumeric
    model.material[38].normalMap = normalMap_hair_Haumeric;
    model.material[38].normalScale.set(5, 5);
}
function Noudenet(model){
    const normalMap_etc_Haumeric = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/etc-Haumeric_n.png' );
    const normalMap_hair_Noudenet = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/hair-Noudenet_n.png' );
    const normalMap_met_Noudenet = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/met_guan_n.png' );
    normalMap_etc_Haumeric.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_hair_Noudenet.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_met_Noudenet.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_body = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/body_n.png' );
    const normalMap_eyes = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/yan_n.png' );
    const normalMap_face_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/face-Charibert_n.png' );
    normalMap_body.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_eyes.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_face_Charibert.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_top_cangqiong_faxi = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/top_cangqiong_faxi_n.png' );
    const normalMap_glv_cangqiong_faxi = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/glv_cangqiong_faxi_n.png' );
    const normalMap_dwn_cangqiong = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/dwn_cangqiong_n.png' );
    const normalMap_sho_cangqiong = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/sho_cangqiong_n.png' );	
    normalMap_top_cangqiong_faxi.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_glv_cangqiong_faxi.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_dwn_cangqiong.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_sho_cangqiong.wrapT   = THREE.MirroredRepeatWrapping;

    model.material[0].normalMap = normalMap_body;
    model.material[1].normalMap = normalMap_glv_cangqiong_faxi;
    model.material[2].normalMap = normalMap_top_cangqiong_faxi;
    model.material[2].normalScale.set(5, 5);
    model.material[3] = model.material[2];
    model.material[4] = model.material[2];
    model.material[5] = model.material[2];
    model.material[6] = model.material[2];
    model.material[7] = model.material[2];
    model.material[8] = model.material[2];
    model.material[9] = model.material[2];
    model.material[10].normalMap = normalMap_top_cangqiong_faxi;
    model.material[11] = model.material[2];
    model.material[12] = model.material[2];
    model.material[13].normalMap = normalMap_top_cangqiong_faxi;
    model.material[14].normalMap = normalMap_top_cangqiong_faxi;
    model.material[15] = model.material[2];
    model.material[16] = model.material[2];
    model.material[17] = model.material[2];
    model.material[18] = model.material[2];
    model.material[19].normalMap = normalMap_top_cangqiong_faxi;
    model.material[20].normalMap = normalMap_top_cangqiong_faxi;
    model.material[21] = model.material[2];
    model.material[22] = model.material[2];
    model.material[23] = model.material[2];
    model.material[24].normalMap = normalMap_top_cangqiong_faxi;
    model.material[24].normalScale.set(5, 5);
    model.material[25].normalMap = normalMap_dwn_cangqiong;
    model.material[26].normalMap = normalMap_dwn_cangqiong;
    model.material[27].normalMap = normalMap_dwn_cangqiong;
    model.material[28].normalMap = normalMap_dwn_cangqiong;
    model.material[29].normalMap = normalMap_sho_cangqiong;
    model.material[30].normalMap = normalMap_sho_cangqiong;
    model.material[31].normalMap = normalMap_face_Charibert;
    model.material[32].normalMap = normalMap_met_Noudenet;
    model.material[33].normalMap = normalMap_face_Charibert;
    model.material[34].normalMap = normalMap_face_Charibert;
    model.material[35].normalMap = normalMap_face_Charibert;
    model.material[36].normalMap = normalMap_eyes;
    model.material[37].normalMap = normalMap_etc_Haumeric
    model.material[38].normalMap = normalMap_face_Charibert
    model.material[39].normalMap = normalMap_etc_Haumeric;
    model.material[40].normalMap = normalMap_hair_Noudenet;
    model.material[40].normalScale.set(5, 5);
}
function Haurchefant(model){

    const normalMap_etc_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/etc-Charibert_n.png' );
    const normalMap_hair_Haurchefant = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/hair-Haurchefant_n.png' );
    normalMap_etc_Charibert.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_hair_Haurchefant.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_body = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/body_n.png' );
    const normalMap_eyes = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/yan_n.png' );
    const normalMap_face_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/face-Charibert_n.png' );
    normalMap_body.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_eyes.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_face_Charibert.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_top_suozijia = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/top_suozijia_n.png' );
    const normalMap_glv_suozijia = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/glv_suozijia_n.png' );
    const normalMap_dwn_suozijia = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/dwn_suozijia_n.png' );
    const normalMap_sho_suozijia = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/sho_suozijia_n.png' );	
    normalMap_top_suozijia.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_dwn_suozijia.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_glv_suozijia.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_sho_suozijia.wrapT   = THREE.MirroredRepeatWrapping;

    model.material[0].normalMap = normalMap_face_Charibert;
    model.material[1].normalMap = normalMap_face_Charibert;
    model.material[2].normalMap = normalMap_face_Charibert;
    model.material[3].normalMap = normalMap_face_Charibert;
    model.material[4].normalMap = normalMap_sho_suozijia;
    model.material[5].normalMap = normalMap_sho_suozijia;
    model.material[6].normalMap = normalMap_sho_suozijia;
    model.material[7].normalMap = normalMap_sho_suozijia;
    model.material[8].normalMap = normalMap_glv_suozijia;
    model.material[9].normalMap = normalMap_dwn_suozijia;
    model.material[10].normalMap = normalMap_top_suozijia;
    model.material[11].normalMap = normalMap_top_suozijia;
    model.material[11].normalScale.set(2, 2);
    model.material[12].normalMap = normalMap_top_suozijia;
    model.material[12].normalScale.set(2, 2);
    model.material[13].normalMap = normalMap_top_suozijia;
    model.material[13].normalScale.set(2, 2);
    model.material[14].normalMap = normalMap_etc_Charibert;
    model.material[15].normalMap = normalMap_eyes;
    model.material[16].normalMap = normalMap_face_Charibert;
    model.material[17].normalMap = normalMap_etc_Charibert;
    model.material[18].normalMap = normalMap_top_suozijia;
    model.material[19].normalMap = normalMap_hair_Haurchefant;
    model.material[19].normalScale.set(5, 5);
    model.material[20].normalMap = normalMap_etc_Charibert;
    model.material[20].normalScale.set(5, 5);


}
function Noudenet_shenxueyuan(model){
    const normalMap_etc_Haumeric = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/etc-Haumeric_n.png' );
    const normalMap_hair_Noudenet = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/hair-Noudenet_n.png' );
    const normalMap_met_Noudenet = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/met_guan_n.png' );
    normalMap_etc_Haumeric.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_hair_Noudenet.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_met_Noudenet.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_body = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/body_n.png' );
    const normalMap_eyes = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/yan_n.png' );
    const normalMap_face_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/face-Charibert_n.png' );
    normalMap_body.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_eyes.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_face_Charibert.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_top_shenxueyuan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/top_shenxueyuan_n.png' );
    const normalMap_glv_shenxueyuan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/glv_shenxueyuan_n.png' );
    const normalMap_dwn_shenxueyuan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/dwn_shenxueyuan_n.png' );
    const normalMap_sho_shenxueyuan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/sho_shenxueyuan_n.png' );
    normalMap_top_shenxueyuan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_glv_shenxueyuan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_dwn_shenxueyuan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_sho_shenxueyuan.wrapT   = THREE.MirroredRepeatWrapping;

    model.material[0].normalMap = normalMap_face_Charibert;
    model.material[1].normalMap = normalMap_glv_shenxueyuan;
    model.material[2].normalMap = normalMap_top_shenxueyuan;
    model.material[3].normalMap = normalMap_top_shenxueyuan;
    model.material[4].normalMap = normalMap_dwn_shenxueyuan;
    model.material[5].normalMap = normalMap_sho_shenxueyuan;
    model.material[6].normalMap = normalMap_sho_shenxueyuan;
    model.material[7].normalMap = normalMap_sho_shenxueyuan;
    model.material[8].normalMap = normalMap_top_shenxueyuan;
    model.material[9].normalMap = normalMap_top_shenxueyuan;
    model.material[10].normalMap = normalMap_glv_shenxueyuan;
    model.material[11].normalMap = normalMap_glv_shenxueyuan;
    model.material[12].normalMap = normalMap_glv_shenxueyuan;
    model.material[13].normalMap = normalMap_top_shenxueyuan;
    model.material[13].normalScale.set(5, 5);
    model.material[14].normalMap = normalMap_top_shenxueyuan;
    model.material[14].normalScale.set(5, 5);
    model.material[15].normalMap = normalMap_body;
    model.material[16].normalMap = normalMap_face_Charibert;
    model.material[17].normalMap = normalMap_face_Charibert;
    model.material[18].normalMap = normalMap_face_Charibert;
    model.material[19].normalMap = normalMap_met_Noudenet;
    model.material[20].normalMap = normalMap_eyes;
    model.material[21].normalMap = normalMap_hair_Noudenet;
    model.material[21].normalScale.set(5, 5);
    model.material[22].normalMap = normalMap_etc_Haumeric;
    model.material[23].normalMap = normalMap_face_Charibert;
    model.material[24].normalMap = normalMap_etc_Haumeric;
}
function Haumeric_shenxueyuan(model){
    const normalMap_etc_Haumeric = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/etc-Haumeric_n.png' );
    normalMap_etc_Haumeric.wrapT   = THREE.MirroredRepeatWrapping;
    const normalMap_hair_Haumeric = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/hair-Haumeric_n.png' );
    normalMap_hair_Haumeric.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_body = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/body_n.png' );
    const normalMap_eyes = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/yan_n.png' );
    const normalMap_face_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/face-Charibert_n.png' );
    normalMap_body.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_eyes.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_face_Charibert.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_top_shenxueyuan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/top_shenxueyuan_n.png' );
    const normalMap_glv_shenxueyuan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/glv_shenxueyuan_n.png' );
    const normalMap_dwn_shenxueyuan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/dwn_shenxueyuan_n.png' );
    const normalMap_sho_shenxueyuan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/sho_shenxueyuan_n.png' );
    normalMap_top_shenxueyuan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_glv_shenxueyuan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_dwn_shenxueyuan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_sho_shenxueyuan.wrapT   = THREE.MirroredRepeatWrapping;

    model.material[0].normalMap = normalMap_face_Charibert;
    model.material[1].normalMap = normalMap_glv_shenxueyuan;
    model.material[2].normalMap = normalMap_top_shenxueyuan;
    model.material[3].normalMap = normalMap_top_shenxueyuan;
    model.material[4].normalMap = normalMap_dwn_shenxueyuan;
    model.material[5].normalMap = normalMap_sho_shenxueyuan;
    model.material[6].normalMap = normalMap_sho_shenxueyuan;
    model.material[7].normalMap = normalMap_sho_shenxueyuan;
    model.material[8].normalMap = normalMap_top_shenxueyuan;
    model.material[9].normalMap = normalMap_top_shenxueyuan;
    model.material[10].normalMap = normalMap_glv_shenxueyuan;
    model.material[11].normalMap = normalMap_glv_shenxueyuan;
    model.material[12].normalMap = normalMap_glv_shenxueyuan;
    model.material[13].normalMap = normalMap_top_shenxueyuan;
    model.material[13].normalScale.set(5, 5);
    model.material[14].normalMap = normalMap_top_shenxueyuan;
    model.material[14].normalScale.set(5, 5);
    model.material[15].normalMap = normalMap_body;
    model.material[16].normalMap = normalMap_face_Charibert;
    model.material[17].normalMap = normalMap_face_Charibert;
    model.material[18].normalMap = normalMap_face_Charibert;
    model.material[19].normalMap = normalMap_eyes;
    model.material[20].normalMap = normalMap_etc_Haumeric;
    model.material[21].normalMap = normalMap_etc_Haumeric;
    model.material[22].normalMap = normalMap_hair_Haumeric;
    model.material[22].normalScale.set(5, 5);
}
function Charibert_shenwenguan(model){

    const normalMap_etc_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/etc-Charibert_n.png' );
    const normalMap_hair_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/hair-Charibert_n.png' );
    const normalMap_hair2_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/hair2-Charibert_n.png' );
    normalMap_etc_Charibert.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_hair_Charibert.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_hair2_Charibert.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_body = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/body_n.png' );
    const normalMap_eyes = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/yan_n.png' );
    const normalMap_face_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/face-Charibert_n.png' );
    normalMap_body.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_eyes.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_face_Charibert.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_top_shenwenguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/top_shenwenguan_n.png' );
    const normalMap_glv_shenwenguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/glv_shenwenguan_n.png' );
    const normalMap_dwn_shenwenguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/dwn_shenwenguan_n.png' );
    const normalMap_sho_shenwenguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/sho_shenwenguan_n.png' );	
    normalMap_top_shenwenguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_glv_shenwenguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_dwn_shenwenguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_sho_shenwenguan.wrapT   = THREE.MirroredRepeatWrapping;

    model.material[0].normalMap = normalMap_face_Charibert;
    model.material[1].normalMap = normalMap_body;
    model.material[2].normalMap = normalMap_face_Charibert;
    model.material[3].normalMap = normalMap_eyes;
    model.material[4].normalMap = normalMap_face_Charibert;
    model.material[5].normalMap = normalMap_face_Charibert;
    model.material[6].normalMap = normalMap_glv_shenwenguan;
    model.material[7].normalMap = normalMap_body;
    model.material[8].normalMap = normalMap_sho_shenwenguan;
    model.material[9].normalMap = normalMap_dwn_shenwenguan;
    model.material[10].normalMap = normalMap_top_shenwenguan;
    model.material[10].normalScale.set(3, 3);
    model.material[11].normalMap = normalMap_top_shenwenguan;
    model.material[11].normalScale.set(3, 3);
    model.material[12].normalMap = normalMap_top_shenwenguan;
    model.material[12].normalScale.set(5, 5);
    model.material[13].normalMap = normalMap_top_shenwenguan;
    model.material[13].normalScale.set(3, 3);
    model.material[14].normalMap = normalMap_top_shenwenguan;
    model.material[14].normalScale.set(5, 5);
    model.material[15].normalMap = normalMap_top_shenwenguan;
    model.material[16].normalMap = normalMap_top_shenwenguan;
    model.material[17].normalMap = normalMap_top_shenwenguan;
    model.material[18].normalMap = normalMap_top_shenwenguan;
    model.material[19].normalMap = normalMap_top_shenwenguan;
    model.material[20].normalMap = normalMap_sho_shenwenguan;
    model.material[21].normalMap = normalMap_sho_shenwenguan;
    model.material[22].normalMap = normalMap_sho_shenwenguan;
    model.material[23].normalMap = normalMap_face_Charibert;
    model.material[24].normalMap = normalMap_etc_Charibert;
    model.material[25].normalMap = normalMap_etc_Charibert;
    model.material[26].normalMap = normalMap_etc_Charibert;
    model.material[26].normalScale.set(5, 5);
    model.material[27].normalMap = normalMap_hair2_Charibert;
    model.material[27].normalScale.set(5, 5);
    model.material[28].normalMap = normalMap_hair_Charibert;
    model.material[28].normalScale.set(5, 5);

}
function Noudenet_zongguan(model){
    const normalMap_etc_Haumeric = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/etc-Haumeric_n.png' );
    const normalMap_hair_Noudenet = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/hair-Noudenet_n.png' );
    const normalMap_met_Noudenet = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/met_guan_n.png' );
    normalMap_etc_Haumeric.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_hair_Noudenet.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_met_Noudenet.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_body = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/body_n.png' );
    const normalMap_eyes = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/yan_n.png' );
    const normalMap_face_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/face-Charibert_n.png' );
    normalMap_body.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_eyes.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_face_Charibert.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_top_zongguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/top_zongguan_n.png' );
    const normalMap_glv_zongguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/glv_zongguan_n.png' );
    const normalMap_dwn_zongguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/dwn_zongguan_n.png' );
    const normalMap_sho_zongguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/sho_zongguan_n.png' );
    const normalMap_met_zongguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/met_zongguan_n.png' );
    normalMap_top_zongguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_glv_zongguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_dwn_zongguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_sho_zongguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_met_zongguan.wrapT   = THREE.MirroredRepeatWrapping;

    model.material[0].normalMap = normalMap_face_Charibert;
    model.material[1].normalMap = normalMap_body;
    model.material[2].normalMap = normalMap_dwn_zongguan;
    model.material[3].normalMap = normalMap_top_zongguan;
    model.material[4].normalMap = normalMap_top_zongguan;
    model.material[4].normalScale.set(5, 5);
    model.material[5].normalMap = normalMap_top_zongguan;
    model.material[5].normalScale.set(5, 5);
    model.material[6].normalMap = normalMap_sho_zongguan;
    model.material[7].normalMap = normalMap_glv_zongguan;
    model.material[8].normalMap = normalMap_face_Charibert;
    model.material[9].normalMap = normalMap_met_Noudenet;
    model.material[10].normalMap = normalMap_face_Charibert;
    model.material[11].normalMap = normalMap_face_Charibert;
    model.material[12].normalMap = normalMap_face_Charibert;
    model.material[13].normalMap = normalMap_eyes;
    model.material[14].normalMap = normalMap_etc_Haumeric;
    model.material[15].normalMap = normalMap_etc_Haumeric;
    model.material[16].normalMap = normalMap_hair_Noudenet;
    model.material[16].normalScale.set(5, 5);
    model.material[17].normalMap = normalMap_met_zongguan;
    model.material[18].normalMap = normalMap_met_zongguan;
}
function Haumeric_zongguan(model){
    const normalMap_etc_Haumeric = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/etc-Haumeric_n.png' );
    const normalMap_hair_Haumeric = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/hair-Haumeric_n.png' );
    normalMap_etc_Haumeric.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_hair_Haumeric.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_body = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/body_n.png' );
    const normalMap_eyes = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/yan_n.png' );
    const normalMap_face_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/face-Charibert_n.png' );
    normalMap_body.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_eyes.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_face_Charibert.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_top_zongguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/top_zongguan_n.png' );
    const normalMap_glv_zongguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/glv_zongguan_n.png' );
    const normalMap_dwn_zongguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/dwn_zongguan_n.png' );
    const normalMap_sho_zongguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/sho_zongguan_n.png' );
    const normalMap_met_zongguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/met_zongguan_n.png' );
    normalMap_top_zongguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_glv_zongguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_dwn_zongguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_sho_zongguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_met_zongguan.wrapT   = THREE.MirroredRepeatWrapping;

    model.material[0].normalMap = normalMap_face_Charibert;
    model.material[1].normalMap = normalMap_body;
    model.material[2].normalMap = normalMap_dwn_zongguan;
    model.material[3].normalMap = normalMap_top_zongguan;
    model.material[4].normalMap = normalMap_top_zongguan;
    model.material[4].normalScale.set(5, 5);
    model.material[5].normalMap = normalMap_top_zongguan;
    model.material[5].normalScale.set(5, 5);
    model.material[6].normalMap = normalMap_sho_zongguan;
    model.material[7].normalMap = normalMap_glv_zongguan;
    model.material[8].normalMap = normalMap_face_Charibert;
    model.material[9].normalMap = normalMap_face_Charibert;
    model.material[10].normalMap = normalMap_face_Charibert;
    model.material[11].normalMap = normalMap_eyes;
    model.material[12].normalMap = normalMap_etc_Haumeric;
    model.material[13].normalMap = normalMap_etc_Haumeric;
    model.material[14].normalMap = normalMap_hair_Haumeric;
    model.material[14].normalScale.set(5, 5);
    model.material[15].normalMap = normalMap_met_zongguan;
    model.material[16].normalMap = normalMap_met_zongguan;
}
function Charibert_zongguan(model){
    const normalMap_etc_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/etc-Charibert_n.png' );
    const normalMap_hair_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/hair-Charibert_n.png' );
    const normalMap_hair2_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/hair2-Charibert_n.png' );
    normalMap_etc_Charibert.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_hair_Charibert.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_hair2_Charibert.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_body = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/body_n.png' );
    const normalMap_eyes = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/yan_n.png' );
    const normalMap_face_Charibert = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/face-Charibert_n.png' );
    normalMap_body.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_eyes.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_face_Charibert.wrapT   = THREE.MirroredRepeatWrapping;

    const normalMap_top_zongguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/top_zongguan_n.png' );
    const normalMap_glv_zongguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/glv_zongguan_n.png' );
    const normalMap_dwn_zongguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/dwn_zongguan_n.png' );
    const normalMap_sho_zongguan = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/sho_zongguan_n.png' );
    const normalMap_met_xiaohuangying = new THREE.TextureLoader().load( './models/mmd/pmx/tex/normalMap/met_xiaohuangying_n.png' );
    normalMap_top_zongguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_glv_zongguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_dwn_zongguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_sho_zongguan.wrapT   = THREE.MirroredRepeatWrapping;
    normalMap_met_xiaohuangying.wrapT   = THREE.MirroredRepeatWrapping;

    model.material[0].normalMap = normalMap_face_Charibert;
    model.material[1].normalMap = normalMap_body;
    model.material[2].normalMap = normalMap_dwn_zongguan;
    model.material[3].normalMap = normalMap_top_zongguan;
    model.material[4].normalMap = normalMap_top_zongguan;
    model.material[4].normalScale.set(5, 5);
    model.material[5].normalMap = normalMap_top_zongguan;
    model.material[5].normalScale.set(5, 5);
    model.material[6].normalMap = normalMap_sho_zongguan;
    model.material[7].normalMap = normalMap_glv_zongguan;
    model.material[8].normalMap = normalMap_face_Charibert;
    model.material[9].normalMap = normalMap_face_Charibert;
    model.material[10].normalMap = normalMap_face_Charibert;
    model.material[11].normalMap = normalMap_face_Charibert;
    model.material[12].normalMap = normalMap_eyes;
    model.material[13].normalMap = normalMap_etc_Charibert;
    model.material[14].normalMap = normalMap_etc_Charibert;
    model.material[15].normalMap = normalMap_etc_Charibert;
    model.material[15].normalScale.set(5, 5);
    model.material[16].normalMap = normalMap_hair2_Charibert;
    model.material[16].normalScale.set(5, 5);
    model.material[17].normalMap = normalMap_hair_Charibert;
    model.material[17].normalScale.set(5, 5);
    model.material[18].normalMap = normalMap_met_xiaohuangying;
    model.material[19].normalMap = normalMap_met_xiaohuangying;
    model.material[20].normalMap = normalMap_met_xiaohuangying;
}
export { Charibert,Haumeric,Noudenet,Haurchefant }
export { Noudenet_shenxueyuan,Haumeric_shenxueyuan,Charibert_shenwenguan }
export { Noudenet_zongguan,Haumeric_zongguan,Charibert_zongguan }