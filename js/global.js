$(function(){
    $('#tlemail').data('holder',$('#tlemail').attr('placeholder'));

    $('#tlemail').focusin(function(){
        $(this).attr('placeholder','');
    });
    $('#tlemail').focusout(function(){
        $(this).attr('placeholder',$(this).data('holder'));
    });
});