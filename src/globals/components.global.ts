import Vue from 'vue';

// Shared Components
import navbar from '@/components/shared/navbar/navbar.vue';
Vue.component('navbar', navbar);
import footer from '@/components/shared/footer/footer.vue';
Vue.component('footer-component', footer);

//Transaction Components
import transactionComponent from '@/components/TransactionComponent.vue';
Vue.component('transaction-component', transactionComponent);
import transactionForm from '@/components/TransactionForm.vue';
Vue.component('transaction-form', transactionForm);