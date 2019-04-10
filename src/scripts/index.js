import $ from 'jquery'
import App from './react/Apps'
import React from 'react'
import { Provider } from 'react-redux'
import createstore from './react/store'
// import subscription from './react/actions/subscription'
const ReactDOM = require('react-dom')
const store = createstore()
const domContainer = document.querySelector('#root')
ReactDOM.render(<Provider store={store}><App></App></Provider>, domContainer)
$(document).ready(function () {
  function stateCookieModal () {
    if (localStorage.getItem('cookiesModal')) {
      let data = JSON.parse(localStorage.getItem('cookiesModal'))
      if (data.cookiesModal >= 25) {
        $('.cookies').addClass('cookies-open')
        data.cookiesModal = 0
        localStorage.setItem('cookiesModal', JSON.stringify(data))
      } else {
        data.cookiesModal += 1
        localStorage.setItem('cookiesModal', JSON.stringify(data))
      }
    } else {
      $('.cookies').addClass('cookies-open')
    }
  }
  stateCookieModal()
  $('.cookies__close').on('click', function (e) {
    e.preventDefault()
    $('.cookies').addClass('cookies-close').removeClass('cookies-open')
    let data = {
      cookiesModal: 0
    }
    localStorage.setItem('cookiesModal', JSON.stringify(data))
  })

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
    $('html, body').removeClass('pop_up_op')
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
    $('.select__wr').each(function (i) {
      if ($(this).find('input[type="radio"]:checked').length === 0) {
        $(this).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
        e.preventDefault()
      } else {
        if ($(this).find('input[type="radio"]:checked').hasClass('default')) {
          $(this).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
          e.preventDefault()
        }
      }
    })
    var trigger = true
    var fieldMmail = $('.send_request [name="email"]')
    if ($(fieldMmail).val() === '') {
      $(fieldMmail).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
      $(fieldMmail).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').removeClass('pop_up__warm_text_no_valid')
      e.preventDefault()
    } else {
      if (!validate(fieldMmail, trigger)) {
        $(fieldMmail).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').addClass('pop_up__warm_text_no_valid')
        // trigger = false
        e.preventDefault()
      }
    }
    // var fieldIdMail = $('.send_request [name="id"]')
    // if ($(fieldIdMail).val() === '') {
    //   $(fieldIdMail).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
    //   $(fieldIdMail).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').removeClass('pop_up__warm_text_no_valid')
    //   e.preventDefault()
    // } else {
    //   if (!validateID(fieldIdMail, trigger)) {
    //     $(fieldIdMail).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').addClass('pop_up__warm_text_no_valid')
    //     e.preventDefault()
    //   } else {
    //     $(fieldIdMail).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').removeClass('pop_up__warm_text_no_valid')
    //   }
    // }
    if ($('.send_request textarea').val() === '') {
      $('.send_request textarea').closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
      e.preventDefault()
    }
    if (!trigger) return false
  }, false)

  // Validator id email
  // function validateID (_this, trigger) {
  //   var ckEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  //   var type = true
  //   if (type) {
  //     if (!ckEmail.test($(_this).val())) {
  //       return false
  //     } else {
  //       return true
  //     }
  //   } else {
  //     return true
  //   }
  // }
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
  $('.index_main__title').on('click', function () {
    $('html, body').addClass('pop_up_op');
    store.dispatch({
      type: 'SUBSCR',
      payload: 'true'
    })
  })
  $('.nav__log_in').on('click', function () {
    $('html, body').addClass('pop_up_op');
    store.dispatch({
      type: 'LIG_IN',
      payload: 'true'
    })
  })
})
