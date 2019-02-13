import $ from 'jquery'

$(document).ready(function () {
  // Open popUp
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
  $('.send_request [name="e-mail"], .send_request textarea, .select__wr').on('click', function () {
    $(this).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').removeClass('pop_up__warm_text_no_choose')
    $(this).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').removeClass('pop_up__warm_text_no_valid')
  })

  // $('.pop_up__field_file').on('click', function () {
  //   $(this).closest('.pop_up__file_label').find('.pop_up__warm_text_chose').removeClass('pop_up__warm_text_no_choose')
  // })

  // Falidation form
  $('.btn.pop_up__input_btn').click(function (e) {
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
    var _this = $('.send_request [name="e-mail"]')
    if ($(_this).val() === '') {
      $(_this).closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
      $(_this).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').removeClass('pop_up__warm_text_no_valid')
      e.preventDefault()
    } else {
      if (!validate(_this, trigger)) {
        $(_this).closest('.pop_up__input_wr').find('.pop_up__warm_text_valid').addClass('pop_up__warm_text_no_valid')
        trigger = false
      }
    }
    if ($('.send_request textarea').val() === '') {
      $('.send_request textarea').closest('.pop_up__input_wr').find('.pop_up__warm_text_chose').addClass('pop_up__warm_text_no_choose')
      e.preventDefault()
    }
    // if ($('#fileuploadurl').val() === '') {
    //   $('.pop_up__input_wr_file .pop_up__warm_text').addClass('pop_up__warm_text_no_choose')
    //   e.preventDefault()
    // }
    if (!trigger) return false
  })

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
    // console.log(lengthArea, 'lengthArea')
    // -
    // -
    if (e.keyCode === 8) {
      if (lengthArea === 0) {
        console.log('clear')
        $('.pop_up__warm_counter').hide()
        return false
      }
    }
    // -
    // -
    // console.log((maxlength - lengthArea))
    if ((maxlength - lengthArea) - 1 < counter) {
      $('.pop_up__warm_counter').show()
      let increm = (maxlength - lengthArea)
      if (increm < 0) {
        $('#chars2').text(0)
        return
      }
      $('#chars2').text(increm)
    }
    // -
    // -
    if (e.keyCode === 8) {
      let decrim = (maxlength - lengthArea)
      if (decrim > counter) {
        $('.pop_up__warm_counter').hide()
        return
      }
      $('#chars2').text(decrim)
    }
  })
  // let lengthAreaBefore = 0
  // let valiCounter = maxlength - counter
  $('.pop_up__field_areas').keydown(function (e) {
    let lengthArea = $(this).val().length + 1
    if (lengthArea >= maxlength) return
    console.log(lengthArea, 'lengthArea')
    // console.log(lengthAreaBefore, ' bef')
    // console.log(lengthArea)
    if (e.keyCode === 8) {
      // lengthAreaBefore = lengthArea
      let decr = (maxlength - lengthArea) + 1
      if (decr === counter) {
        // valiCounter = maxlength - counter
        $('.pop_up__warm_counter').hide()
        return
      }
      $('#chars2').text(decr)
      return
    }
    // let lengthAmo = maxlength - lengthArea
    // $('#chars').text(lengthAmo)
    if ((maxlength - lengthArea) <= counter) {
      // if (lengthAreaBefore < lengthArea) return
      let decrim = (maxlength - lengthArea)
      $('.pop_up__warm_counter').show()
      if (decrim <= 0) {
        $('#chars2').text(0)
        return
      }
      $('#chars2').text(decrim)
      // lengthAreaBefore = lengthArea
      // decrim--
    } else {
      // if (valiCounter >= counter) {
      //   $('.pop_up__warm_counter').hide()
      //   return
      // }
      // valiCounter++
      // $('#chars2').text(valiCounter)
    }
  })

  $('.pop_up__field_areas').keyup(function (e) {
    let lengthArea2 = $(this).val().length
    if (e.keyCode === 8) {
      if (lengthArea2 === 0) {
        $('.pop_up__warm_counter').hide()
        return false
      }
    }
  })

  function textAreaAdjust (o) {
    o.style.height = '1px'
    var offset = o.offsetHeight - o.clientHeight
    // o.style.height = (2 + o.scrollHeight) + 'px'
    $(o).css('height', 'auto').css('height', o.scrollHeight + offset)
    console.log($(o).height())
    if (window.innerWidth >= 767) {
      if ($(o).height() >= 150) {
        $('.pop_up__input_wr_area .pop_up__name_input').css('opacity', '0')
      } else {
        $('.pop_up__input_wr_area .pop_up__name_input').css('opacity', '1')
      }
    } else {
      if ($(o).height() >= 144) {
        $('.pop_up__input_wr_area .pop_up__name_input').css('opacity', '0')
      } else {
        $('.pop_up__input_wr_area .pop_up__name_input').css('opacity', '1')
      }
    }
  }
  $('.pop_up__field_area').keyup(function (e) {
    let EO = this
    textAreaAdjust(EO)
  })
})
