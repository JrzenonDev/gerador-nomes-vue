<template>
  <div>

    <div id="slogan" class="text-center">
      <h1>Name Gator</h1>
      <br>
      <h6 class="text-secondary">Gerador de nomes utilizando Vue.js, GraphQL e Node</h6>
    </div>

    <div id="main">
      <div class="container">
        <div class="row">
          <div class="col-md">

            <h5>Prefixos <span class="badge badge-info">{{ prefixes.length }}</span> </h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="prefix in prefixes" v-bind:key="prefix">
<<<<<<< HEAD
                    <div class="row">
											<div class="col-md">
												{{ prefix }}
											</div>
											<div class="col-md text-right">
												<button class="btn btn-info" v-on:click="deletePrefix(prefix)"><span class="fa fa-trash"></span></button>
											</div>
										</div>
                  </li>
                </ul>
                <br>
                <div class="input-group">
                  <input type="text" class="form-control" v-model="prefix" v-on:keyup.enter="addPrefix(prefix)" placeholder="Digite o prefixo" />
                  <div class="input-group-append">
                    <button class="btn btn-info" v-on:click="addPrefix(prefix)"><span class="fa fa-plus"></span></button>
                  </div>
                </div>
=======
                    {{ prefix }}
                  </li>
                </ul>
                <br>
                <input type="text" class="form-control" placeholder="Digite o prefixo" />
>>>>>>> 7c28e4c37410c4c90b431109578acf8f4c8ebc67
              </div>
            </div>

          </div>

          <div class="col-md">

            <h5>Sufixos <span class="badge badge-info">{{ sufixes.length }}</span></h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="sufix in sufixes" v-bind:key="sufix">
<<<<<<< HEAD
                    <div class="row">
											<div class="col-md">
												{{ sufix }}
											</div>
											<div class="col-md text-right">
												<button class="btn btn-info" v-on:click="deleteSufix(sufix)"><span class="fa fa-trash"></span></button>
											</div>
										</div>
                  </li>
                </ul>
                <br>
                <div class="input-group">
                  <input type="text" class="form-control" v-model="sufix" v-on:keyup.enter="addSufix(sufix)" placeholder="Digite o sufixo" />
                  <div class="input-group-append">
                    <button class="btn btn-info" v-on:click="addSufix(sufix)"><span class="fa fa-plus"></span></button>
                  </div>
                </div>
=======
                    {{ sufix }}
                  </li>
                </ul>
                <br>
                <input type="text" class="form-control" placeholder="Digite o sufixo" />
>>>>>>> 7c28e4c37410c4c90b431109578acf8f4c8ebc67
              </div>
            </div>

          </div>


        </div>

        <br>
        <h5>Domínios <span class="badge badge-info">{{ domains.length }}</span></h5>
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item" v-for="domain in domains" v-bind:key="domain">
                {{ domain }}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

export default {
<<<<<<< HEAD
	name: "app",
	data: function () {
		return {
			prefix: "",
			sufix: "",
			prefixes: ["Air", "Jet", "Flight"],
			sufixes: ["Hub", "Station", "Mart"],
			domains: ["AirHub", "AirStation", "AirMart", "JetHut", "JetStation", "JetMart"]
		};
	},
	methods: {
		addPrefix(sufix) {
			this.prefixes.push(sufix);
			this.prefix = "";
			this.generate();
		},
		deleteSufix(sufix) {
			this.sufixes.splice(this.sufixes.indexOf(sufix), 1);
			this.generate();
		},
		addSufix(prefix) {
			this.sufixes.push(prefix);
			this.sufix = "";
			this.generate();
		},
		deletePrefix(prefix) {
			this.prefixes.splice(this.prefixes.indexOf(prefix), 1);
			this.generate();
		},
		generate() {
			this.domains = [];
			for (const prefix of this.prefixes) {
				for (const sufix of this.sufixes) {
					this.domains.push(sufix + prefix);
				}
			}
		}
	}
};
=======
  name: 'app',
  data: function () {
    return {
      prefixes: ['Air', 'Jet', 'Flight'],
      sufixes: ['Hub', 'Station', 'Mart'],
      domains: ['AirHub', 'AirStation', 'AirMart', 'JetHut', 'JetStation', 'JetMart']
    };
  }
}
>>>>>>> 7c28e4c37410c4c90b431109578acf8f4c8ebc67
</script>

<style>
  #slogan {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  #main {
    background-color: #f1f1f1;
    padding-top: 30px;
    padding-bottom: 30px;
  }
</style>
