// import LikeButton from './Component/app.js'
import $ from 'jquery'
// const React = require('react')
// const ReactDOM = require('react-dom')
// const e = React.createElement
// const domContainer = document.querySelector('.index_main__title')
// ReactDOM.render(<LikeButton />, domContainer)

$(document).ready(function () {
  // Call  popUp
  $('.popUpCall').click(function () {
    var popUpName = $(this).data('pop_up')
    popUping(popUpName)
    return false
  })

  // Open popUp
  function popUping (_popUpName) {
    console.log($(_popUpName))
    $('html, body').addClass('pop_up_cond')
    $(_popUpName).addClass('pop_up_active')
  }

  // Close popUp
  $('.pop_up__toggle').click(function () {
    $(this).closest('.pop_up__wr').removeClass('pop_up_active')
    $('html, body').removeClass('pop_up_cond')
    return false
  })

  // File name
  document.getElementById('FileAttachment').onchange = function () {
    document.getElementById('fileuploadurl').value = this.value.replace(/C:\\fakepath\\/i, '')
  }

  // Destore invalid text on form
  $('.send_request [name="email"], .send_request textarea, .select__wr, .send_request [name="id"]').on('click', function () {
    $(this).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').removeClass('pop_up__warm_text_no_choose')
    $(this).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').removeClass('pop_up__warm_text_no_valid')
  })

  // Validate Form and Submit
  document.getElementById('ajax-contact-form').addEventListener('submit', function (e) {
    // let targetThis = e.target
    // let state = true
    // e.preventDefault()
    $('.select__wr').each(function (i) {
      if ($(this).find('input[type="radio"]:checked').length === 0) {
        $(this).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
        // state = false
        e.preventDefault()
      } else {
        if ($(this).find('input[type="radio"]:checked').hasClass('default')) {
          $(this).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
          // state = false
          e.preventDefault()
        }
      }
    })
    var trigger = true
    var field_mail = $('.send_request [name="email"]')
    if ($(field_mail).val() === '') {
      $(field_mail).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
      $(field_mail).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').removeClass('pop_up__warm_text_no_valid')
      // state = false
      e.preventDefault()
    } else {
      if (!validate(field_mail, trigger)) {
        $(field_mail).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').addClass('pop_up__warm_text_no_valid')
        // trigger = false
        e.preventDefault()
      }
    }
    var field_id_mail = $('.send_request [name="id"]')
    if ($(field_id_mail).val() === '') {
      $(field_id_mail).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
      $(field_id_mail).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').removeClass('pop_up__warm_text_no_valid')
      e.preventDefault()
    } else {
      if (!validateID(field_id_mail, trigger)) {
        $(field_id_mail).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').addClass('pop_up__warm_text_no_valid')
        e.preventDefault()
      } else {
        $(field_id_mail).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').removeClass('pop_up__warm_text_no_valid')
      }
    }
    if ($('.send_request textarea').val() === '') {
      $('.send_request textarea').closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
      // state = false
      e.preventDefault()
    }
    if (!trigger) return false
  }, false)

  // Validator id email
  function validateID (_this, trigger) {
    var ckName = /^[А-Яа-яA-Za-z\s]{1,20}$/
    var ckText = /^[А-Яа-яA-Za-z0-9,.!?\s]{1,5000}$/
    var ckTel = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
    var ckNumber = /^\d+$/
    var ckDate = /^(\d{1,2}).(\d{1,2}).(\d{2}|\d{4})$/
    var ckEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    var type = true
    if (type) {
      if (!ckEmail.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }
  // Validator form impus
  function validate (_this, trigger) {
    var ckName = /^[А-Яа-яA-Za-z\s]{1,20}$/
    var ckText = /^[А-Яа-яA-Za-z0-9,.!?\s]{1,5000}$/
    var ckTel = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
    var ckNumber = /^\d+$/
    var ckDate = /^(\d{1,2}).(\d{1,2}).(\d{2}|\d{4})$/
    var ckEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    var type = $(_this).attr('type')
    if (type === 'number') {
      if (!ckNumber.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'text') {
      if (!ckText.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'password') {
      if (!ckText.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'date') {
      if (!ckDate.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'e-mail') {
      if (!ckEmail.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'tel') {
      if (!ckTel.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'name') {
      if (!ckName.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }
  function textAreaAdjust (o) {
    o.style.height = '1px'
    var offset = o.offsetHeight - o.clientHeight
    $(o).css('height', 'auto').css('height', o.scrollHeight + offset)
  }
  $('.pop_up__field_area').keyup(function (e) {
    let EO = this
    textAreaAdjust(EO)
  })
  // characters
  let maxlength = 700
  let counter = 50
  $('.pop_up__field_area').on('keydown, keyup', function (e) {
    let lengthArea = $(this).val().length
    if (lengthArea >= maxlength) {
      $('.pop_up__warm_counter').show()
      $('#chars2').text(0)
      return
    }
    if (e.keyCode === 8) {
      if (lengthArea === 0) {
        console.log('clear')
        $('.pop_up__warm_counter').hide()
        return false
      }
    }
    if ((maxlength - lengthArea) - 1 < counter) {
      $('.pop_up__warm_counter').show()
      let increm = (maxlength - lengthArea)
      if (increm < 0) {
        $('#chars2').text(0)
        return
      }
      $('#chars2').text(increm)
    }
    if (e.keyCode === 8) {
      let decrim = (maxlength - lengthArea)
      if (decrim > counter) {
        $('.pop_up__warm_counter').hide()
        return
      }
      $('#chars2').text(decrim)
    }
  })
  // .start_free_trial
  $('.start_free_trial').on('click', function (e) {
    e.preventDefault()
    console.log('Ваша платформа: ' + findOS())
    let nameUserPlatfornOne = findOS()
    if (nameUserPlatfornOne === 'MacOS') {
      document.location.href = 'https://itunes.apple.com/app/id981856216?_branch_match_id=623206276219064180'
    } else {
      let nameUserPlatform = getPlatform()
      if ((nameUserPlatform === 'iPhone') || (nameUserPlatform === 'iPad') || (nameUserPlatform === 'iPod')) {
        document.location.href = 'https://itunes.apple.com/app/id981856216?_branch_match_id=623206276219064180'
      } else {
        document.location.href = 'https://play.google.com/store/apps/details?id=com.geozilla.family&_branch_match_id=623206276219064180'
      }
    }
  })
  var userDeviceArray = [
    {device: 'Android', platform: /Android/},
    {device: 'iPhone', platform: /iPhone/},
    {device: 'iPad', platform: /iPad/},
    {device: 'Symbian', platform: /Symbian/},
    {device: 'Windows Phone', platform: /Windows Phone/},
    {device: 'Tablet OS', platform: /Tablet OS/},
    {device: 'Linux', platform: /Linux/},
    {device: 'Windows', platform: /Windows NT/},
    {device: 'Macintosh', platform: /Macintosh/}
  ]
  var platform = navigator.userAgent
  function getPlatform () {
    for (var i in userDeviceArray) {
      if (userDeviceArray[i].platform.test(platform)) {
        return userDeviceArray[i].device
      }
    }
    return 'Неизвестная платформа!' + platform
  }

  function findOS () {
    var curOS = 'Not Nmaed...'
    if (navigator.appVersion.indexOf('Win') !== -1) curOS = 'Windows'
    if (navigator.appVersion.indexOf('Mac') !== -1) curOS = 'MacOS'
    if (navigator.appVersion.indexOf('X11') !== -1) curOS = 'UNIX'
    if (navigator.appVersion.indexOf('Linux') !== -1) curOS = 'Linux'
    return curOS
  }
})
