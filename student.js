import {V as o} from "./vue.968e3963.js";
import {s} from "./student.6b9bf395.js";
import {i} from "./vendor.03cf6245.js";
import {J as p} from "./JsErrorReporter.230fd30f.js";
import {P as a} from "./ParsedText.d612544b.js";
import {D as u} from "./DefaultTaskGroup.bc002e06.js";
import {T as c} from "./TokenContainer.7f0081b0.js";
import "./admin.3dd0918f.js";
import {l as d} from "./VariationSetGenerator.76337f1f.js";
import "./create_store.feede565.js";
import "./SfiGradingHelper.0d1b200e.js";
import "./tasks.bb3b188a.js";
import "./DentConstants.9c5e8501.js";
import "./StandardButton.e4028b35.js";
import "./AppButton.182eeb9e.js";
import "./_plugin-vue2_normalizer.2bbd088e.js";
import "./AppIcon.983dae0e.js";
import "./lodash.1fed07e5.js";
import "./_commonjsHelpers.042e6b4d.js";
import "./LatexUtil.8cc70e77.js";
import "./DentUtil.8a2cba8c.js";
import "./ClientUtil.61eecdb8.js";
import "./TouchMixin.ad4cc369.js";
import "./DOMDerivedDataMixin.e557a3a1.js";
import "./imagesloaded.f3aae497.js";
import "./StandardIconOnlyButton.fe9fd372.js";
import "./activity_completions.c73fb281.js";
import "./index.3403b1c6.js";
import "./AsyncUtil.297ca876.js";
import "./UserActionTrackingMixin.574a6f21.js";
import "./GradeUtil.18e0489f.js";
import "./howler.16bf33e9.js";
import "./StandardComponentizedHtmlMixin.f55ca1ae.js";
import "./StandardLink.4dd4e0a6.js";
import "./AppLink.9545503f.js";
import "./EventBus.bbd7e7c5.js";
import "./TaskGroupMixin.61b5b918.js";
import "./TaskMixin.c6654fa1.js";
import "./TextUtil.b5a49ebb.js";
import "./SfiGroupedInputsMixin.14a1923f.js";
import "./FractionAreaModelToken.8e90a2ea.js";
import "./NestableTokenMixin.622bc41c.js";
import "./SubtokenMixin.72be57b4.js";
import "./CurlyBracket.fe2f6592.js";
import "./DeleteEmptyTextNodes.7b42942b.js";
import "./DragUtil.4e3e22a0.js";
import "./v-click-outside.6e0dba52.js";
import "./Video.0334e14f.js";
import "./GeometryCanvas.97008880.js";
import "./GeometryGraphics.8f2d6707.js";
import "./CoordinateUtil.c82ed5df.js";
import "./SimpleVideoPlayer.bf40f72b.js";
import "./LabelsToken.b25646df.js";
import "./CoordinatePlane.784852ab.js";
import "./CoordinatePlanePoint.1c7f7b10.js";
import "./MathToken.733f3f28.js";
import "./FractionToken.60fec5bd.js";
import "./UIDMixin.d0af90ff.js";
import "./LessonUtil.b64a9165.js";
import "./MsTableToken.c36fe22c.js";
import "./MultipleChoiceOption.dd34c5a7.js";
import "./GeometryAssetsMixin.16dbc6c2.js";
import "./CuboidToken.c820de80.js";
import "./PresetPolygonToken.0aa75914.js";
import "./TableToken.a1aff371.js";
import "./RatioDiagramGroup.7421692f.js";
import "./BarGraphLegend.d31d0be0.js";
import "./IconUndoX.6dd229d8.js";
import "./InactivityMixin.87e58b48.js";
import "./vue.6393bf1c.js";
import "./naturalSort.11e7fc54.js";
import "./MathHelper.4a2a3f86.js";
window.Dent.utils.Store = s;
Dent.utils.VueGlueUtil = {
    cleanupVue(t, e=!1) {
        t.commit("taskGroups/resetTaskGroups"),
        t.dispatch("zearnKeypads/resetZearnKeypads"),
        t.commit("tasks/resetDynamicStates", !e),
        t.commit("sfi/resetSfi"),
        t.commit("sound/resetSound"),
        t.commit("tiles/resetTiles")
    }
};
const l = 400
  , g = "Saving your work..."
  , h = "Saved!"
  , f = "Oops! Trouble saving.";
Dent.utils.RequestsMonitor = class {
    setProgressElement(e) {
        this.progressEl = e
    }
    allWriteRequestsCompleted() {
        return new Promise((e,r)=>{
            this._checkPendingWriteRequests(e, r)
        }
        )
    }
    _checkPendingWriteRequests(e, r) {
        this._hasActiveWriteRequests() ? (this.hadPendingWriteRequest = !0,
        this._showSomeProgress(),
        setTimeout(()=>{
            this._checkPendingWriteRequests(e, r)
        }
        , l)) : this._hasWriteRequests() ? (this.progressEl.text(f),
        r()) : (this.hadPendingWriteRequest && this.progressEl.text(h),
        e())
    }
    _showSomeProgress() {
        let e = this.progressEl.text();
        const r = (e.match(/\./g) || []).length;
        (r === 0 || r > 8) && (e = g),
        this.progressEl.text(e + ".")
    }
    _hasActiveWriteRequests() {
        return $.numActiveWriteRequests > 0 || window.numActiveWriteRequests > 0 || this._isAxiosRequestPending()
    }
    _hasWriteRequests() {
        return $.numFailedWriteRequests > 0 || window.numFailedWriteRequests > 0
    }
    _isAxiosRequestPending() {
        return s.getters["axios/pendingWriteRequest"]
    }
}
;
const k = {
    getIsCorrectable: ()=>s.getters["tasks/isCorrectable"],
    setHasOldAutocorrect: (t,e)=>s.commit("tasks/setHasOldAutocorrect", {
        taskId: t,
        hasOldAutocorrect: e
    }),
    allowFinalAdvancement: t=>s.dispatch("tasks/allowFinalAdvancement", {
        taskId: t
    }),
    clearCorrectable: t=>s.dispatch("tasks/clearCorrectable", {
        taskId: t
    }),
    triggerClearTryAgain: t=>s.dispatch("tasks/triggerClearTryAgain", {
        taskId: t
    }),
    responseUpdated: (t,{isAwaitingResponse: e})=>s.dispatch("tasks/responseUpdated", {
        taskId: t,
        isAwaitingResponse: e
    })
}
  , T = Object.keys(Dent.coffeeTaskControllers())
  , n = d.objectValuesDeep({
    object: gon,
    key: "task_type"
})
  , A = n.some(t=>T.includes(t))
  , R = n.length === 0 && !gon.posts;
(A || R) && (window.Dent.TaskStoreGlue = k);
o.component("TokenContainer", c);
Dent.utils.AddStudentVue = function(t) {
    t == null && (t = $(".vue-container-manual:not(.vue-instantiated)")),
    $(t).each((e,r)=>{
        $(r).addClass("vue-instantiated"),
        new o({
            el: r,
            store: s,
            i18n: i,
            components: {
                DefaultTaskGroup: u
            }
        })
    }
    )
}
;
Dent.utils.AddParsedTextVue = function(t) {
    new o({
        el: t,
        store: s,
        i18n: i,
        components: {
            ParsedText: a
        }
    })
}
;
document.addEventListener("DOMContentLoaded", ()=>{
    $(".vue-container").each((t,e)=>{
        Dent.utils.AddStudentVue(e)
    }
    )
}
);
function m(t) {
    const e = s.getters["taskGroups/currentTGId"]
      , r = `Error: ${t}, URL: ${window.location.href}, UA: ${navigator.userAgent}`;
    p.send("StudentContent", e, r)
}
window.addEventListener("error", t=>m(t.message));
o.config.errorHandler = t=>{
    console.error(t),
    m(t)
};
