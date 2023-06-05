(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"borderRadius":0,"shadow":false,"gap":10,"definitions": [{"hfovMin":"105%","thumbnailUrl":"media/panorama_823E1905_8BD9_6E80_41DC_D1462308E7D5_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_823E1905_8BD9_6E80_41DC_D1462308E7D5_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_823E1905_8BD9_6E80_41DC_D1462308E7D5_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_823E1905_8BD9_6E80_41DC_D1462308E7D5_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_823E1905_8BD9_6E80_41DC_D1462308E7D5_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_823E1905_8BD9_6E80_41DC_D1462308E7D5_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_823E1905_8BD9_6E80_41DC_D1462308E7D5_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"pitch":0,"label":trans('panorama_823E1905_8BD9_6E80_41DC_D1462308E7D5.label'),"id":"panorama_823E1905_8BD9_6E80_41DC_D1462308E7D5","hfovMax":130,"class":"Panorama","data":{"label":"Loft 01 (6 of 9)-Edit"},"hfov":360},{"hfovMin":"105%","thumbnailUrl":"media/panorama_823E1849_8BD9_6E80_41D0_B44199D2635E_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_823E1849_8BD9_6E80_41D0_B44199D2635E_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_823E1849_8BD9_6E80_41D0_B44199D2635E_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_823E1849_8BD9_6E80_41D0_B44199D2635E_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_823E1849_8BD9_6E80_41D0_B44199D2635E_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_823E1849_8BD9_6E80_41D0_B44199D2635E_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_823E1849_8BD9_6E80_41D0_B44199D2635E_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"pitch":0,"label":trans('panorama_823E1849_8BD9_6E80_41D0_B44199D2635E.label'),"id":"panorama_823E1849_8BD9_6E80_41D0_B44199D2635E","hfovMax":130,"class":"Panorama","data":{"label":"Loft 01 (4 of 9)-Edit"},"hfov":360},{"manualRotationSpeed":500,"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_81DAEA88_8BD9_2380_41E0_F1B16C232FDC","id":"panorama_823E2075_8BD9_7E80_41C8_4B079C7C5113_camera"},{"hfovMin":"105%","thumbnailUrl":"media/panorama_810B05B2_8BD9_2180_41D4_AB6CDA95EC25_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_810B05B2_8BD9_2180_41D4_AB6CDA95EC25_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_810B05B2_8BD9_2180_41D4_AB6CDA95EC25_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_810B05B2_8BD9_2180_41D4_AB6CDA95EC25_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_810B05B2_8BD9_2180_41D4_AB6CDA95EC25_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_810B05B2_8BD9_2180_41D4_AB6CDA95EC25_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_810B05B2_8BD9_2180_41D4_AB6CDA95EC25_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"pitch":0,"label":trans('panorama_810B05B2_8BD9_2180_41D4_AB6CDA95EC25.label'),"id":"panorama_810B05B2_8BD9_2180_41D4_AB6CDA95EC25","hfovMax":130,"class":"Panorama","data":{"label":"Loft 01 (1 of 9)-Edit"},"hfov":360},{"displayPlaybackBar":true,"surfaceSelectionEnabled":true,"zoomEnabled":true,"viewerArea":"this.MainViewer","surfaceSelectionVerticalAngle":124.2,"class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","adjacentPanoramaPositionsEnabled":true,"arrowKeysAction":"translate","aaEnabled":true,"touchControlMode":"drag_rotation","surfaceSelectionHorizontalAngle":62.1,"id":"MainViewerPanoramaPlayer"},{"manualRotationSpeed":500,"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_81DAAA89_8BD9_2380_41C1_F0BA29F49C2E","id":"panorama_823DF1DC_8BD9_2180_41DB_959EC791A0B0_camera"},{"hfovMin":"105%","thumbnailUrl":"media/panorama_823E2075_8BD9_7E80_41C8_4B079C7C5113_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_823E2075_8BD9_7E80_41C8_4B079C7C5113_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_823E2075_8BD9_7E80_41C8_4B079C7C5113_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_823E2075_8BD9_7E80_41C8_4B079C7C5113_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_823E2075_8BD9_7E80_41C8_4B079C7C5113_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_823E2075_8BD9_7E80_41C8_4B079C7C5113_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_823E2075_8BD9_7E80_41C8_4B079C7C5113_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"pitch":0,"label":trans('panorama_823E2075_8BD9_7E80_41C8_4B079C7C5113.label'),"id":"panorama_823E2075_8BD9_7E80_41C8_4B079C7C5113","hfovMax":130,"class":"Panorama","data":{"label":"Loft 01 (5 of 9)-Edit"},"hfov":360},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_810B05B2_8BD9_2180_41D4_AB6CDA95EC25_camera","media":"this.panorama_810B05B2_8BD9_2180_41D4_AB6CDA95EC25","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_82335FB0_8BD9_2180_41C1_9E01B32DDAB6_camera","media":"this.panorama_82335FB0_8BD9_2180_41C1_9E01B32DDAB6","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_823E1849_8BD9_6E80_41D0_B44199D2635E_camera","media":"this.panorama_823E1849_8BD9_6E80_41D0_B44199D2635E","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_823E2075_8BD9_7E80_41C8_4B079C7C5113_camera","media":"this.panorama_823E2075_8BD9_7E80_41C8_4B079C7C5113","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_823E1905_8BD9_6E80_41DC_D1462308E7D5_camera","media":"this.panorama_823E1905_8BD9_6E80_41DC_D1462308E7D5","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_823DF1DC_8BD9_2180_41DB_959EC791A0B0_camera","media":"this.panorama_823DF1DC_8BD9_2180_41DB_959EC791A0B0","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 6)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_823E0A05_8BD9_2281_41DF_D84036A0411D_camera","media":"this.panorama_823E0A05_8BD9_2281_41DF_D84036A0411D","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 6, 7)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_823DC212_8BD9_2280_41DE_09D1E707775A_camera","media":"this.panorama_823DC212_8BD9_2280_41DE_09D1E707775A","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 7, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"manualRotationSpeed":500,"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_81DB0A88_8BD9_2380_41D6_F1B0B29DF715","id":"panorama_823E1849_8BD9_6E80_41D0_B44199D2635E_camera"},{"manualRotationSpeed":500,"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_81DB3A88_8BD9_2380_41D3_E69B0094CC9A","id":"panorama_82335FB0_8BD9_2180_41C1_9E01B32DDAB6_camera"},{"hfovMin":"105%","thumbnailUrl":"media/panorama_823DC212_8BD9_2280_41DE_09D1E707775A_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_823DC212_8BD9_2280_41DE_09D1E707775A_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_823DC212_8BD9_2280_41DE_09D1E707775A_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_823DC212_8BD9_2280_41DE_09D1E707775A_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_823DC212_8BD9_2280_41DE_09D1E707775A_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_823DC212_8BD9_2280_41DE_09D1E707775A_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_823DC212_8BD9_2280_41DE_09D1E707775A_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"pitch":0,"label":trans('panorama_823DC212_8BD9_2280_41DE_09D1E707775A.label'),"id":"panorama_823DC212_8BD9_2280_41DE_09D1E707775A","hfovMax":130,"class":"Panorama","data":{"label":"Loft 01 (9 of 9)-Edit"},"hfov":360},{"borderRadius":0,"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadOpacity":1,"playbackBarBorderColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":0,"playbackBarBorderRadius":0,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"playbackBarHeight":10,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"width":"100%","paddingRight":0,"progressBackgroundColorRatios":[0],"paddingLeft":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipShadowVerticalLength":0,"toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","progressOpacity":1,"playbackBarHeadShadowVerticalLength":0,"progressRight":0,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"toolTipHorizontalAlign":"center","height":"100%","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":5,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesPaddingLeft":5,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#000000","progressBackgroundOpacity":1,"subtitlesPaddingBottom":5,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadHeight":15,"progressBarBackgroundColor":["#3399FF"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#FFFFFF"],"toolTipFontWeight":"normal","progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"progressBottom":0,"class":"ViewerArea","minHeight":50,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"borderSize":0,"toolTipPaddingRight":6,"minWidth":100,"progressHeight":10,"subtitlesOpacity":1,"subtitlesBorderSize":0,"progressBorderSize":0,"toolTipShadowHorizontalLength":0,"subtitlesFontFamily":"Arial","toolTipTextShadowBlurRadius":3,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":0,"subtitlesBorderColor":"#FFFFFF","transitionDuration":500,"progressBorderRadius":0,"subtitlesFontWeight":"normal","toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","progressLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowHorizontalLength":0,"surfaceReticleOpacity":0.5,"subtitlesTextDecoration":"none","toolTipShadowColor":"#333333","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#33FF00","playbackBarOpacity":1,"vrPointerSelectionTime":2000,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":0.5,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":1,"subtitlesGap":0,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","playbackBarRight":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"shadow":false,"data":{"name":"Main Viewer"}},{"manualRotationSpeed":500,"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_81DA8A89_8BD9_2380_41D6_19F5D17617E6","id":"panorama_823E0A05_8BD9_2281_41DF_D84036A0411D_camera"},{"hfovMin":"105%","thumbnailUrl":"media/panorama_82335FB0_8BD9_2180_41C1_9E01B32DDAB6_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_82335FB0_8BD9_2180_41C1_9E01B32DDAB6_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_82335FB0_8BD9_2180_41C1_9E01B32DDAB6_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_82335FB0_8BD9_2180_41C1_9E01B32DDAB6_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_82335FB0_8BD9_2180_41C1_9E01B32DDAB6_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_82335FB0_8BD9_2180_41C1_9E01B32DDAB6_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_82335FB0_8BD9_2180_41C1_9E01B32DDAB6_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"pitch":0,"label":trans('panorama_82335FB0_8BD9_2180_41C1_9E01B32DDAB6.label'),"id":"panorama_82335FB0_8BD9_2180_41C1_9E01B32DDAB6","hfovMax":130,"class":"Panorama","data":{"label":"Loft 01 (2 of 9)-Edit"},"hfov":360},{"manualRotationSpeed":500,"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"displayOriginPosition":{"yaw":0,"hfov":165,"class":"RotationalCameraDisplayPosition","pitch":90,"stereographicFactor":1},"automaticZoomSpeed":10,"class":"PanoramaCamera","displayMovements":[{"easing":"linear","class":"TargetRotationalCameraDisplayMovement","duration":1000},{"easing":"cubic_in_out","duration":3000,"targetPitch":0,"class":"TargetRotationalCameraDisplayMovement","targetHfov":120,"targetStereographicFactor":0}],"initialSequence":"this.sequence_82269A86_8BD9_2380_41D7_8A187DF02C22","id":"panorama_810B05B2_8BD9_2180_41D4_AB6CDA95EC25_camera"},{"manualRotationSpeed":500,"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_81DA6A89_8BD9_2380_41DF_485277991415","id":"panorama_823DC212_8BD9_2280_41DE_09D1E707775A_camera"},{"hfovMin":"105%","thumbnailUrl":"media/panorama_823E0A05_8BD9_2281_41DF_D84036A0411D_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_823E0A05_8BD9_2281_41DF_D84036A0411D_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_823E0A05_8BD9_2281_41DF_D84036A0411D_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_823E0A05_8BD9_2281_41DF_D84036A0411D_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_823E0A05_8BD9_2281_41DF_D84036A0411D_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_823E0A05_8BD9_2281_41DF_D84036A0411D_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_823E0A05_8BD9_2281_41DF_D84036A0411D_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"pitch":0,"label":trans('panorama_823E0A05_8BD9_2281_41DF_D84036A0411D.label'),"id":"panorama_823E0A05_8BD9_2281_41DF_D84036A0411D","hfovMax":130,"class":"Panorama","data":{"label":"Loft 01 (8 of 9)-Edit"},"hfov":360},{"manualRotationSpeed":500,"hoverFactor":0,"initialPosition":{"yaw":0,"hfov":120,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_81DACA89_8BD9_2380_41DE_DC32E751EC48","id":"panorama_823E1905_8BD9_6E80_41DC_D1462308E7D5_camera"},{"hfovMin":"105%","thumbnailUrl":"media/panorama_823DF1DC_8BD9_2180_41DB_959EC791A0B0_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":12288,"rowCount":4,"url":"media/panorama_823DF1DC_8BD9_2180_41DB_959EC791A0B0_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_823DF1DC_8BD9_2180_41DB_959EC791A0B0_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_823DF1DC_8BD9_2180_41DB_959EC791A0B0_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":1,"url":"media/panorama_823DF1DC_8BD9_2180_41DB_959EC791A0B0_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_823DF1DC_8BD9_2180_41DB_959EC791A0B0_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_823DF1DC_8BD9_2180_41DB_959EC791A0B0_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"pitch":0,"label":trans('panorama_823DF1DC_8BD9_2180_41DB_959EC791A0B0.label'),"id":"panorama_823DF1DC_8BD9_2180_41DB_959EC791A0B0","hfovMax":130,"class":"Panorama","data":{"label":"Loft 01 (7 of 9)-Edit"},"hfov":360},{"class":"PlayerMenuItem","label":"BS Estúdio","id":"TDVAuthor"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":2.66,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_81DAEA88_8BD9_2380_41E0_F1B16C232FDC"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":2.66,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_81DAAA89_8BD9_2380_41C1_F0BA29F49C2E"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":2.66,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_81DB0A88_8BD9_2380_41D6_F1B0B29DF715"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":2.66,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_81DB3A88_8BD9_2380_41D3_E69B0094CC9A"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":2.66,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_81DA8A89_8BD9_2380_41D6_19F5D17617E6"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":2.66,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_82269A86_8BD9_2380_41D7_8A187DF02C22"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":2.66,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_81DA6A89_8BD9_2380_41DF_485277991415"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":2.66,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":2.66,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_81DACA89_8BD9_2380_41DE_DC32E751EC48"}],"width":"100%","mediaActivationMode":"window","overflow":"hidden","paddingTop":0,"propagateClick":false,"backgroundOpacity":1,"scrollBarMargin":2,"paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"menu":["this.TDVAuthor"],"scripts":{"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"translate":TDV.Tour.Script.translate,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"playAudioList":TDV.Tour.Script.playAudioList,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizShowScore":TDV.Tour.Script.quizShowScore,"getKey":TDV.Tour.Script.getKey,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"shareSocial":TDV.Tour.Script.shareSocial,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"existsKey":TDV.Tour.Script.existsKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"init":TDV.Tour.Script.init,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"initQuiz":TDV.Tour.Script.initQuiz,"textToSpeech":TDV.Tour.Script.textToSpeech,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlays":TDV.Tour.Script.getOverlays,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"cloneCamera":TDV.Tour.Script.cloneCamera,"getMainViewer":TDV.Tour.Script.getMainViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"downloadFile":TDV.Tour.Script.downloadFile,"quizStart":TDV.Tour.Script.quizStart,"quizFinish":TDV.Tour.Script.quizFinish,"mixObject":TDV.Tour.Script.mixObject,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"isPanorama":TDV.Tour.Script.isPanorama,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPixels":TDV.Tour.Script.getPixels,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getComponentByName":TDV.Tour.Script.getComponentByName,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setLocale":TDV.Tour.Script.setLocale,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setValue":TDV.Tour.Script.setValue,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showWindow":TDV.Tour.Script.showWindow,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"registerKey":TDV.Tour.Script.registerKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"historyGoForward":TDV.Tour.Script.historyGoForward,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"unregisterKey":TDV.Tour.Script.unregisterKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio},"paddingRight":0,"paddingLeft":0,"horizontalAlign":"left","vrPolyfillScale":0.75,"verticalAlign":"top","defaultVRPointer":"laser","contentOpaque":false,"scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"children":["this.MainViewer"],"toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#FFFFFF"],"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","downloadEnabled":false,"backgroundPreloadEnabled":true,"start":"this.get('data').surfaceSelectionHotspotMode = 'circleEnabled'; this.init()","class":"Player","minHeight":20,"data":{"defaultLocale":"pt","name":"Player530","textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1},"locales":{"pt":"locale/pt.txt"}},"backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Mon Jun 5 2023