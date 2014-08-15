(function($) {

    $.fn.sideBar = function() {

        var bw1 = $('body').outerWidth();

            $('.menuListHolder > li').each(function() {

                var oc = $(this).attr('class').split(' ')[0];

                $(this).click(function(e) {

                     e.stopPropagation();

                    if ( bw1 <= 1200 ) {

                        $('#sideBar').addClass('onClick');

                        if ( oc == 'menuList' ) {

                            var cc = $(this).attr('class').split(' ')[1];

                            if ( cc == undefined ) {

                            } else {

                                $('ul > .menuList').removeClass('activeList');

                                $('.childList').hide();

                                $(this).addClass('activeList');

                                var nc = cc.replace('Parent', 'List');

                                $('.'+nc).fadeIn('fast');

                            }

                        } else {

                            $('ul > .childList').removeClass('activeEventList');

                            $(this).addClass('activeEventList');

                        }

                    } else {

                        if ( oc == 'menuList' ) {

                            var cc = $(this).attr('class').split(' ')[1];

                            if ( cc == undefined ) {

                            } else {

                                var nc = cc.replace('Parent', 'List');

                                $('ul > .menuList').removeClass('activeList');

                                $('.childList').hide();

                                $(this).addClass('activeList');                                

                                $('.'+nc).fadeIn('fast');

                            }

                        } else {

                            $('ul > .childList').removeClass('activeEventList');

                            $(this).addClass('activeEventList');

                        }

                    }


                });


            });

        $(window).on('resize',function() {

            var bw = $('body').outerWidth();

            var ss = $('#sideBar').outerWidth();

            if ( bw <= 1200 ) {

                $('.childList').hide();

            }

            $('.menuListHolder > li').each(function() {

                var oc = $(this).attr('class').split(' ')[0];

                $(this).click(function(e) {

                    e.stopPropagation();

                    if ( bw <= 1200 ) {

                        $('#sideBar').addClass('onClick');

                        if ( oc == 'menuList' ) {

                            var cc = $(this).attr('class').split(' ')[1];

                            if ( cc == undefined ) {

                            } else {

                                $('ul > .menuList').removeClass('activeList');

                                $('.childList').hide();

                                $(this).addClass('activeList');

                                var nc = cc.replace('Parent', 'List');

                                $('.'+nc).fadeIn('fast');

                            }

                        } else {

                            $('ul > .childList').removeClass('activeEventList');

                            $(this).addClass('activeEventList');

                        }

                    }



                });

            });

            $('body').click(function() {

                if ( bw <= 1200 ) {

                    $('#sideBar').removeClass('onClick');

                    $('.menuListHolder > li.childList').hide();

                }

            });

            console.log(ss);

        });

        $('body').click(function() {

            if ( bw1 <= 1200 ) {

                $('#sideBar').removeClass('onClick');

                $('.menuListHolder > li.childList').hide();

            } else {



            }

        });



    }

    $.fn.mainContent = function() {

        var sw = $('#sideBar').outerWidth();

        var dw = $('body').outerWidth();

        var t1 = dw - sw;

        $('.mainContentDetailsHolder').outerWidth(t1);

        $(window).resize(function() {

            var sw1 = $('#sideBar').outerWidth();

            var dw1 = $('body').outerWidth();

            var t2 = dw1 - sw1;

            $('.mainContentDetailsHolder').outerWidth(t2);

            console.log(t2);

        });

        console.log(t1);

    }

    $.fn.tabContents = function() {

        $('.tabTitleList > li').each(function() {

            $(this).click(function() {

                var cc = $(this).attr('class').replace('Title','Content');

                $('.tabDetailsList > li').removeClass('activeTab');

                $('.'+cc).addClass('activeTab');

            });

        });

    }


})(jQuery);
