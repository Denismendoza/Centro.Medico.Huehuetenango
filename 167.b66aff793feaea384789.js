"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[167],{4167:(bt,F,r)=>{r.r(F),r.d(F,{UsersModule:()=>Ut});var g=r(9765),S=r(4762),J=r(3752),l=r(3679),d=r(2238),c=r(6782),t=r(7716),D=r(1841),L=r(2340),p=r(8002),f=r(5304),z=r(6215),h=r(5917);const v=L.N.API_URL;let b=(()=>{class o{constructor(e){this._http=e,this._users=new z.X([]),this._dialog=new g.xQ}get users$(){return this._users.asObservable()}dialogOpened(){this._dialog.next()}get dialog$(){return this._dialog.asObservable()}findUsersPaginated(e=1,i=10){const s=(new D.LE).append("page",e).append("pageSize",i);return this._http.get(`${v}user/findPaginated`,{params:s}).pipe((0,p.U)(a=>(this._users.next(a.data),a)),(0,f.K)(a=>(0,h.of)(null)))}createUser(e){return this._http.post(`${v}user/create`,e).pipe((0,p.U)(i=>null==i?void 0:i.stored),(0,f.K)(i=>(0,h.of)(!1)))}updateUser(e){return this._http.put(`${v}user/update`,e).pipe((0,p.U)(i=>null==i?void 0:i.updated),(0,f.K)(i=>(0,h.of)(!1)))}deleteUser(e){return this._http.delete(`${v}user/delete/${e}`).pipe((0,p.U)(i=>null==i?void 0:i.deleted),(0,f.K)(i=>(0,h.of)(!1)))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(D.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var k=r(2138),m=r(8583),x=r(8295),Q=r(9983),w=r(7441),_=r(1095),E=r(2458);function M(o,n){1&o&&(t.TgZ(0,"h2",13),t._uU(1,"Editar usuario"),t.qZA())}function $(o,n){1&o&&(t.TgZ(0,"h2",13),t._uU(1,"Datos de usuario"),t.qZA())}function H(o,n){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es requerido. "),t.qZA())}function j(o,n){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es requerido. "),t.qZA())}function B(o,n){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es requerido. "),t.qZA())}function P(o,n){if(1&o&&(t.TgZ(0,"mat-option",14),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.value),t.xp6(1),t.Oqu(e.key)}}function K(o,n){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es requerido. "),t.qZA())}function G(o,n){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es requerido y debe ser un correo electr\xf3nico v\xe1lido. "),t.qZA())}function V(o,n){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es requerido. "),t.qZA())}function W(o,n){if(1&o&&(t.TgZ(0,"mat-option",14),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.value),t.xp6(1),t.Oqu(e.key)}}function X(o,n){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es requerido. "),t.qZA())}function tt(o,n){if(1&o&&(t.TgZ(0,"mat-form-field"),t.TgZ(1,"mat-select",15),t.YNc(2,W,2,2,"mat-option",7),t.qZA(),t.YNc(3,X,2,0,"mat-error",3),t.qZA()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.states),t.xp6(1),t.Q6J("ngIf",e.Form.get("isEnabled").invalid&&e.Form.get("isEnabled").touched)}}function et(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){return t.CHM(e),t.oxw().onCreateUser()}),t._uU(1," Crear usuario "),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("color","primary")("disabled",e.Form.invalid||e.Form.pristine)}}function ot(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){return t.CHM(e),t.oxw().onEditUser()}),t._uU(1," Actualizar usuario "),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("color","primary")("disabled",e.Form.invalid||e.Form.pristine)}}let q=(()=>{class o{constructor(e,i,s,a,u){this._fb=e,this._service=i,this.data=s,this._snackbar=a,this.dialogRef=u,this.roles=[...J.K],this.states=[...J.t],this._unsubscribe=new g.xQ}ngOnInit(){this._initForm()}ngOnDestroy(){this._unsubscribe.next(),this._unsubscribe.complete()}_initForm(){var e,i,s,a,u,y,A,N,I;this.Form=this._fb.group({id:[null===(e=null==this?void 0:this.data)||void 0===e?void 0:e.id],password:[null,[l.kI.required]],role:[null===(i=null==this?void 0:this.data)||void 0===i?void 0:i.role,[l.kI.required]],email:[null===(s=null==this?void 0:this.data)||void 0===s?void 0:s.email,[l.kI.required]],lastName:[null===(a=null==this?void 0:this.data)||void 0===a?void 0:a.lastName,[l.kI.required]],firstName:[null===(u=null==this?void 0:this.data)||void 0===u?void 0:u.firstName,[l.kI.required]],displayName:[null===(y=null==this?void 0:this.data)||void 0===y?void 0:y.displayName,[l.kI.required]],isEnabled:[+(null===(A=null==this?void 0:this.data)||void 0===A?void 0:A.isEnabled)||1,[l.kI.required]]}),this.data&&(null===(I=null===(N=this.Form.controls)||void 0===N?void 0:N.password)||void 0===I||I.clearValidators())}onKeyDown(e){"Space"===e.code&&e.preventDefault()}onCancel(){this.dialogRef.close()}onCreateUser(){if(this.Form.invalid)return Object.values(this.Form.controls).forEach(e=>e.markAsTouched());this._service.createUser(this.Form.getRawValue()).pipe((0,c.R)(this._unsubscribe)).subscribe(e=>{this._snackbar.open(e?"El usuario se ha creado exit\xf3samente.":"Ha ocurrido un error al crear el usuario."),e&&this.onCancel()})}onEditUser(){if(this.Form.invalid)return Object.values(this.Form.controls).forEach(i=>i.markAsTouched());const e=(0,S._T)(this.Form.getRawValue(),[]);this._service.updateUser(e).pipe((0,c.R)(this._unsubscribe)).subscribe(i=>{this._snackbar.open(i?"El usuario se ha actualizado exit\xf3samente.":"Ha ocurrido un error al actualizar el usuario."),i&&this.onCancel()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.qu),t.Y36(b),t.Y36(d.WI),t.Y36(k.o),t.Y36(d.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-user-detail"]],decls:28,vars:13,consts:[["mat-dialog-title","",4,"ngIf"],["name","Form",3,"formGroup"],["matInput","","placeholder","Nombre","formControlName","firstName",3,"keydown"],[4,"ngIf"],["matInput","","placeholder","Apellido","formControlName","lastName",3,"keydown"],["matInput","","placeholder","Nombre de usuario","formControlName","displayName"],["placeholder","Rol","formControlName","role"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Email","formControlName","email",3,"keydown"],["matInput","","type","password","placeholder","Contrase\xf1a","formControlName","password"],["mat-dialog-actions",""],["mat-button","","type","button",3,"click"],["mat-flat-button","",3,"color","disabled","click",4,"ngIf"],["mat-dialog-title",""],[3,"value"],["placeholder","Estado","formControlName","isEnabled"],["mat-flat-button","",3,"color","disabled","click"]],template:function(e,i){1&e&&(t.YNc(0,M,2,0,"h2",0),t.YNc(1,$,2,0,"h2",0),t.TgZ(2,"form",1),t.TgZ(3,"mat-form-field"),t.TgZ(4,"input",2),t.NdJ("keydown",function(a){return i.onKeyDown(a)}),t.qZA(),t.YNc(5,H,2,0,"mat-error",3),t.qZA(),t.TgZ(6,"mat-form-field"),t.TgZ(7,"input",4),t.NdJ("keydown",function(a){return i.onKeyDown(a)}),t.qZA(),t.YNc(8,j,2,0,"mat-error",3),t.qZA(),t.TgZ(9,"mat-form-field"),t._UZ(10,"input",5),t.YNc(11,B,2,0,"mat-error",3),t.qZA(),t.TgZ(12,"mat-form-field"),t.TgZ(13,"mat-select",6),t.YNc(14,P,2,2,"mat-option",7),t.qZA(),t.YNc(15,K,2,0,"mat-error",3),t.qZA(),t.TgZ(16,"mat-form-field"),t.TgZ(17,"input",8),t.NdJ("keydown",function(a){return i.onKeyDown(a)}),t.qZA(),t.YNc(18,G,2,0,"mat-error",3),t.qZA(),t.TgZ(19,"mat-form-field"),t._UZ(20,"input",9),t.YNc(21,V,2,0,"mat-error",3),t.qZA(),t.YNc(22,tt,4,2,"mat-form-field",3),t.TgZ(23,"div",10),t.TgZ(24,"button",11),t.NdJ("click",function(){return i.onCancel()}),t._uU(25,"Cancelar"),t.qZA(),t.YNc(26,et,2,2,"button",12),t.YNc(27,ot,2,2,"button",12),t.qZA(),t.qZA()),2&e&&(t.Q6J("ngIf",i.data),t.xp6(1),t.Q6J("ngIf",!i.data),t.xp6(1),t.Q6J("formGroup",i.Form),t.xp6(3),t.Q6J("ngIf",i.Form.get("firstName").invalid&&i.Form.get("firstName").touched),t.xp6(3),t.Q6J("ngIf",i.Form.get("lastName").invalid&&i.Form.get("lastName").touched),t.xp6(3),t.Q6J("ngIf",i.Form.get("displayName").invalid&&i.Form.get("displayName").touched),t.xp6(3),t.Q6J("ngForOf",i.roles),t.xp6(1),t.Q6J("ngIf",i.Form.get("role").invalid&&i.Form.get("role").touched),t.xp6(3),t.Q6J("ngIf",i.Form.get("email").invalid&&i.Form.get("email").touched),t.xp6(3),t.Q6J("ngIf",i.Form.get("password").invalid&&i.Form.get("password").touched),t.xp6(1),t.Q6J("ngIf",i.data),t.xp6(4),t.Q6J("ngIf",!i.data),t.xp6(1),t.Q6J("ngIf",i.data))},directives:[m.O5,l._Y,l.JL,l.sg,x.KE,Q.Nt,l.Fj,l.JJ,l.u,w.gD,m.sg,d.H8,_.lW,d.uh,x.TO,E.ey],styles:[".mat-form-field[_ngcontent-%COMP%]{display:grid!important;width:100%;margin-bottom:10px}"]}),o})();var Z=r(6627),T=r(2283),U=r(1494),it=r(6682),nt=r(1452),C=r(9692),rt=r(3190),Y=r(1436);function st(o,n){1&o&&t._UZ(0,"mat-icon",16),2&o&&t.Q6J("matTooltip","Inhabilitado")}function at(o,n){1&o&&t._UZ(0,"mat-icon",17),2&o&&t.Q6J("matTooltip","Habilitado")}function lt(o,n){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",8),t.TgZ(2,"div",9),t._uU(3),t.qZA(),t.TgZ(4,"div",9),t._uU(5),t.qZA(),t.TgZ(6,"div",9),t._uU(7),t.qZA(),t.TgZ(8,"div",9),t.YNc(9,st,1,1,"mat-icon",10),t.YNc(10,at,1,1,"mat-icon",11),t.qZA(),t.TgZ(11,"div",9),t.TgZ(12,"button",12),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).openDialog(a)}),t._UZ(13,"mat-icon",13),t.qZA(),t.TgZ(14,"button",14),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw(2).deleteUser(a.id)}),t._UZ(15,"mat-icon",15),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&o){const e=n.$implicit,i=t.oxw(2);t.xp6(3),t.hij(" ",null==e?null:e.displayName," "),t.xp6(2),t.hij(" ",null==e?null:e.email," "),t.xp6(2),t.hij(" ",i.translateRole(null==e?null:e.role)," "),t.xp6(2),t.Q6J("ngIf",0==+(null==e?null:e.isEnabled)),t.xp6(1),t.Q6J("ngIf",1==+(null==e?null:e.isEnabled)),t.xp6(2),t.Q6J("matTooltip","Editar usuario"),t.xp6(2),t.Q6J("matTooltip","Inhabilitar usuario")}}function ct(o,n){if(1&o&&(t.ynx(0),t.YNc(1,lt,16,7,"ng-container",7),t.BQk()),2&o){const e=n.ngIf,i=t.oxw();t.xp6(1),t.Q6J("ngForOf",e)("ngForTrackBy",i.trackByFn)}}const dt=function(o){return{"pointer-events-none":o}};let ut=(()=>{class o{constructor(e,i,s,a){this._dialog=e,this._service=i,this._snackbar=s,this._changeDetectorRef=a,this.users=[],this.loading=!1,this._unsubscribe=new g.xQ,this.page=1,this.pages=0,this.count=0,this.pageSize=10,this.pageSizeOptions=[10,15,25]}ngOnInit(){this._findUsers(),this._onListenDialog()}ngOnDestroy(){this._unsubscribe.next(),this._unsubscribe.complete()}ngAfterViewInit(){this.sort&&this.paginator&&(this.sort.sort({start:"asc",id:"displayName",disableClear:!0}),this._changeDetectorRef.markForCheck(),(0,it.T)(this.sort.sortChange,this.paginator.page).pipe((0,rt.w)(()=>(this.loading=!0,this.pageSize=this.paginator.pageSize,this._service.findUsersPaginated(this.paginator.pageIndex+1,this.paginator.pageSize))),(0,p.U)(()=>this.loading=!1)).pipe((0,c.R)(this._unsubscribe)).subscribe())}_findUsers(e=1,i=10){this.loading=!0,this._service.findUsersPaginated(e,i).pipe((0,c.R)(this._unsubscribe)).subscribe(s=>{this.users=null==s?void 0:s.data,this.count=null==s?void 0:s.count},()=>{this._snackbar.open("Ha ocurrido un error al obtener los usuarios.")},()=>{this.loading=!1}),this.users$=this._service.users$}_onListenDialog(){this._service.dialog$.pipe((0,c.R)(this._unsubscribe)).subscribe(e=>{this._findUsers(this.paginator.pageIndex+1,this.paginator.pageSize)})}deleteUser(e){this._service.deleteUser(e).pipe((0,c.R)(this._unsubscribe)).subscribe(i=>{this._snackbar.open(i?"Se ha inhabilitado el usuario de manera exit\xf3sa.":"Ha ocurrido un error al inhabilitar el usuario."),i&&this._findUsers(this.paginator.pageIndex+1,this.paginator.pageSize)})}openDialog(e){this._dialog.open(q,{width:"500px",data:e}).afterClosed().pipe((0,c.R)(this._unsubscribe)).subscribe(s=>{this._findUsers(this.paginator.pageIndex+1,this.paginator.pageSize)})}translateRole(e){switch(e){case T.J.ADMIN:return"Administrador";case T.J.DOCTOR:return"M\xe9dico";case T.J.PATIENT:return"Paciente"}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.uw),t.Y36(b),t.Y36(k.o),t.Y36(t.sBO))},o.\u0275cmp=t.Xpm({type:o,selectors:[["user-log"]],viewQuery:function(e,i){if(1&e&&(t.Gf(U.YE,5),t.Gf(C.NW,5)),2&e){let s;t.iGM(s=t.CRH())&&(i.sort=s.first),t.iGM(s=t.CRH())&&(i.paginator=s.first)}},decls:16,vars:9,consts:[[1,"grid"],["matSort","","matSortDisableClear","",1,"inventory-user-grid","z-10","sticky","top-0","grid","gap-4","py-4","px-6","md:px-8","shadow","text-md","font-semibold","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[3,"mat-sort-header"],[1,"hidden","sm:block"],[1,"hidden","lg:block"],[4,"ngIf"],[1,"sm:absolute","sm:inset-x-0","sm:bottom-0","border-b","sm:border-t","sm:border-b-0","z-10","bg-gray-50","dark:bg-transparent",3,"length","pageSizeOptions","ngClass"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"inventory-user-grid","inventory-user-row-grid","grid","items-center","gap-4","py-3","px-6","md:px-8","border-b"],[1,"truncate"],["style","color: red","svgIcon","heroicons_outline:x-circle",3,"matTooltip",4,"ngIf"],["style","color: green","svgIcon","heroicons_outline:check-circle",3,"matTooltip",4,"ngIf"],["mat-stroked-button","",1,"min-w-10","min-h-7","h-7","px-2","leading-6",3,"matTooltip","click"],["svgIcon","heroicons_outline:pencil-alt"],["mat-stroked-button","",1,"min-w-10","min-h-7","h-7","px-2","leading-6","ml-2",3,"matTooltip","click"],["svgIcon","heroicons_outline:user-remove"],["svgIcon","heroicons_outline:x-circle",2,"color","red",3,"matTooltip"],["svgIcon","heroicons_outline:check-circle",2,"color","green",3,"matTooltip"]],template:function(e,i){1&e&&(t.ynx(0),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t._uU(4,"Nombre"),t.qZA(),t.TgZ(5,"div",3),t._uU(6,"Email"),t.qZA(),t.TgZ(7,"div",4),t._uU(8,"Rol"),t.qZA(),t.TgZ(9,"div",3),t._uU(10,"Estado"),t.qZA(),t.TgZ(11,"div",3),t._uU(12,"Opciones"),t.qZA(),t.qZA(),t.qZA(),t.YNc(13,ct,2,2,"ng-container",5),t.ALo(14,"async"),t._UZ(15,"mat-paginator",6),t.BQk()),2&e&&(t.xp6(3),t.Q6J("mat-sort-header","name"),t.xp6(10),t.Q6J("ngIf",t.lcZ(14,5,i.users$)),t.xp6(2),t.Q6J("length",i.count)("pageSizeOptions",i.pageSizeOptions)("ngClass",t.VKq(7,dt,i.loading)))},directives:[U.YE,U.nU,m.O5,C.NW,m.mk,m.sg,_.lW,Y.gM,Z.Hw],pipes:[m.Ov],styles:[".inventory-user-grid{grid-template-columns:auto 40px}@media (min-width: 600px){.inventory-user-grid{grid-template-columns:295px 236px 110px 150px 72px}}@media (min-width: 960px){.inventory-user-grid{grid-template-columns:112px auto 120px 112px 72px}}@media (min-width: 1280px){.inventory-user-grid{grid-template-columns:349px auto 120px 112px 180px}}.inventory-user-row-grid{height:70px}\n"],encapsulation:2,data:{animation:nt.L},changeDetection:0}),o})(),mt=(()=>{class o{constructor(e,i){this._dialog=e,this._service=i}ngOnInit(){this._unsubscribe=new g.xQ}ngOnDestroy(){this._unsubscribe.next(),this._unsubscribe.complete()}createUser(){this._dialog.open(q,{width:"500px"}).afterClosed().pipe((0,c.R)(this._unsubscribe)).subscribe(i=>this._service.dialogOpened())}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.uw),t.Y36(b))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-users"]],decls:12,vars:2,consts:[[1,"sm:absolute","sm:inset-0","flex","flex-col","flex-auto","min-w-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","py-8","px-6","md:px-8","border-b"],[1,"text-4xl","font-extrabold","tracking-tight"],[1,"flex","flex-shrink-0","items-center","mt-6","sm:mt-0","sm:ml-4"],["mat-flat-button","",1,"ml-4",3,"color","click"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","sm:mb-18","overflow-hidden","sm:overflow-y-auto"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3,"Usuarios"),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"button",4),t.NdJ("click",function(){return i.createUser()}),t._UZ(6,"mat-icon",5),t.TgZ(7,"span",6),t._uU(8,"Agregar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",7),t.TgZ(10,"div",8),t._UZ(11,"user-log"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:plus"))},directives:[_.lW,Z.Hw,ut],styles:[""]}),o})();var O=r(3423);const pt=[{path:"",component:mt}];let gt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[O.Bz.forChild(pt)],O.Bz]}),o})();var ft=r(4466),ht=r(7539),vt=r(3935),_t=r(2178),R=r(5396);let Ut=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[ft.m,gt,Z.Ps,vt.Tx,U.JX,Q.c,w.LD,_.ot,E.si,d.Is,Y.AV,ht.p9,C.TU,x.lN,_t.Cv,R.rP,R.rP]]}),o})()}}]);