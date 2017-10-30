<template>
    <div class="STSS__content__protection__container">
        <h4 class="STSS__content__protection__title text-uppercase">PROTECTION</h4>
        <img width="40" height="44" class="pull-right" src="file://D:/Dropbox/Dropbox/mmone/carrello-booking/images/all_base.jpg">
        <div class="STSS__content__protection__list">
            <ul>
                <li>
                    <span>Annullamento del soggiorno</span>
                    <a href="#">
                        <icon-info style="max-width: 26px" />
                    </a>
                </li>
                <li>
                    <svg xml:space="preserve" style="enable-background:new 0 0 611.99 611.99;" viewBox="0 0 611.99 611.99" height="10px" width="10px" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="svg-ico" version="1.1">
                        <g>
                        <g>
                          <g>
                            <path d="M606.453,101.171c-7.422-7.384-19.436-7.384-26.856,0L209.688,470.353L32.71,293.719c-7.499-7.46-19.626-7.46-27.086,0
                              c-7.499,7.46-7.499,19.588,0,27.048L195.341,510.14c0.115,0.115,0.306,0.153,0.421,0.269c0.115,0.114,0.153,0.268,0.229,0.382
                              c7.422,7.422,19.435,7.422,26.856,0l383.605-382.84C613.836,120.566,613.836,108.554,606.453,101.171z" fill="#3abf00"/>
                          </g>
                        </g>
                        </g>
                    </svg>
                    <span>Rimborso importo versato</span></li>
            </ul>
        </div>
        <div class="STSS__content__protection__select">
            <small>Assicura</small>
            <select aria-hidden="true" tabindex="-1" class="insurance hund select2-hidden-accessible" name="insuranceBooking" id="price_cancel">
                <option selected="selected" value="0">Acconto/Caparra</option>
                <option value="1">Tutto il soggiorno</option>
            </select>
        </div>
        <div class="STSS__content__protection__price text-center">
            <span>A soli</span> <em>€ 52<sup>,88</sup></em>
        </div>
        <div class="STSS__content__protection__button text-center">
            <button class="text-uppercase" type="submit">Aggiungi</button>
        </div>
        <div class="STSS__content__protection__info text-center">
            <em>(prima dell’acquisto, <a href="#">legga il fascicolo informativo Protection</a>)</em>
        </div>
    </div>
</template>
<script>
  import IconTick from '../icons/IconTick'
  import IconInfo from '../icons/IconInfo'
  export default {
    components: {
      IconTick, IconInfo
    }
  }
</script>