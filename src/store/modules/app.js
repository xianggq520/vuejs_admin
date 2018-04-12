import Cookies from 'js-cookie'

let calClient = (function windowResizeHandler() {
  let client = {
    oldheight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    step: 0,
    newheight: window.innerHeight ||  document.documentElement.clientHeight || document.body.clientHeight
  };
  return function () {
    client.newheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    client.step = client.newheight - client.oldheight;
    console.log("old:" + client.oldheight, "new:" + client.newheight, "step:" + client.step);
    client.oldheight = client.newheight;
    return client;
  };
})();

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    language: Cookies.get('language') || 'en',
    client: calClient(),
    pendings: [],
    loading : 0
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    },
    UPDATE_CLIENT: (state, step) => { 
      if (step != undefined) {
        state.client.step = step
      } else { 
        state.client = calClient();
      }
    },
    AJAX_PENDING: (state, isPending) => { 
      if (isPending) {
        state.pendings.push(0);
      } else { 
        state.pendings.pop();
      }
      state.loading = state.pendings.length;
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    windowResizeHandler({ commit }) { 
      commit('UPDATE_CLIENT');
    },
    ajaxPending({ commit }, isPending) { 
      commit('AJAX_PENDING', isPending);
    }
  }
}

export default app
