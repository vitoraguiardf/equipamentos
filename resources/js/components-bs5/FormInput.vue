<template>
    <button v-if="type==='button'"
        :id="id"
        :name="name!=null?name:id"
        :type="type"
        :value="modelValue"
        class="btn" :class="'btn-'+variant">{{ title }}</button>
    <input v-else-if="type==='submit'"
        :id="id"
        :name="name!=null?name:id"
        :type="type"
        :value="title"
        class="btn" :class="'btn-'+variant">
    <p v-else-if="type==='checkbox'"
        :id="id"
        :name="name!=null?name:id"
        class="form-label" :class="'form-'+variant">sorry, input type '{{ type }}' not implemented...</p>
    <p v-else-if="type==='option'"
        :id="id"
        :name="name!=null?name:id"
        class="form-label" :class="'form-'+variant">sorry, input type '{{ type }}' not implemented...</p>
    <p v-else-if="type==='select'"
        :id="id"
        :name="name!=null?name:id"
        class="form-label" :class="'form-'+variant">sorry, input type '{{ type }}' not implemented...</p>
    <p v-else-if="type==='textarea'"
        :id="id"
        :name="name!=null?name:id"
        class="form-label" :class="'form-'+variant">sorry, input type '{{ type }}' not implemented...</p>
    <input v-else
        :id="id"
        :name="name!=null?name:id"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form-control mb-2" :class="[{'is-invalid': state==='error', 'is-valid': state==='success'}]"
        :placeholder="placeholder" />
    <!--div v-else class="mb-3" :class="{'form-floating': floating}">
        <label v-if="!floating" :for="id" :class="{labelClass: !floating}">{{ title }}</label>
        <input
            :id="id"
            :name="id"
            :type="type"

            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"

            :class="[inputClass, {'is-invalid': state==='error', 'is-valid': state==='success'}]"
            :placeholder="placeholder">
        <label v-if="floating" :for="id">{{ title }}</label>
        <div id="validation_valid" class="valid-feedback">
            Looks good!
        </div>
        <div id="validation_invalid" class="invalid-feedback">
            Please select a valid state.
        </div>
    </div-->
</template>
<script>
export default {
    emits: ['update:modelValue'],
    props: {
        id: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: null,
            required: true
        },
        modelValue: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        state: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        class: {
            type: String,
            default: null
        },
        variant: {
            type: String,
            default: null
        },
        floating: {
            type: Boolean,
            default: false
        },
    },
}
</script>