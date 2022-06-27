<script setup>


import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const Wizard=library.add(faHatWizard) 

</script>

<template>
<div> {{Wizard}}</div>
<!-- <font-awesome-icon icon="fa-thin fa-1" />
<font-awesome-icon icon="fa-duotone fa-alien" /> -->
</template>
