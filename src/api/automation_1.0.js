/*
 * @Author: chaoxiaoshu-mx leukotrichia@163.com
 * @Date: 2023-02-14 11:13:36
 * @LastEditors: chaoxiaoshu-mx leukotrichia@163.com
 * @LastEditTime: 2023-02-20 08:42:59
 * @FilePath: \ThingsPanel-Backend-Vue\src\api\automation_1.0.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "./http"
export default {

    /**
     * 场景
     */
    Scene: {

        /**
         * 场景列表
         * @param {*} data 
         * @returns 
         */
        list: (data) => {
            return axios({
                url: "/scenario/strategy/list",
                method: "post",
                data
            })
        },

        /**
         * 新增场景策略
         * @param {*} data 
         * @returns 
         */
        add: (data) => {
            return axios({
                url: "/scenario/strategy/add",
                method: "post",
                data
            })
        },

        /**
         * 编辑场景策略
         * @param {*} data 
         * @returns 
         */
        edit: (data) => {
            return axios({
                url: "/scenario/strategy/edit",
                method: "post",
                data
            })
        },

        /**
         * 删除场景策略
         * @param {*} data 
         * @returns 
         */
        delete: (data) => {
            return axios({
                url: "/scenario/strategy/delete",
                method: "post",
                data
            })
        },

        /**
         * 获取单个场景
         * @param {*} data 
         * @returns 
         */
        get: (data) => {
            return axios({
                url: "/scenario/strategy/detail",
                method: "post",
                data
            })
        }

        
        
    },

    /**
     * 控制策略
     */
    Control: {
        /**
         * 新增控制策略
         * @param {*} data 
         * @returns 
         */
        add: (data) => {
            return axios({
                url: "/v1/automation/add",
                method: "post",
                data
            })
        },

        /**
         * 修改控制策略
         * @param {*} data 
         * @returns 
         */
        edit: (data) => {
            return axios({
                url: "/v1/automation/edit",
                method: "post",
                data
            })
        },

        /**
         * 删除控制策略
         * @param {*} data 
         * @returns 
         */
        delete: (data) => {
            return axios({
                url: "/v1/automation/delete",
                method: "post",
                data
            })
        },

        /**
         * 修改启用状态
         * @param {*} data 
         * @returns 
         */
        enabled: (data) => {
            return axios({
                url: "/v1/automation/enabled",
                method: "post",
                data
            })
        },

        /**
         * 控制策略列表
         * @param {*} data 
         * @returns 
         */
        list: (data) => {
            return axios({
                url: "/v1/automation/list",
                method: "post",
                data
            })
        },

        /**
         * 获取单个控制策略
         * @param {*} data 
         * @returns 
         */
        get: (data) => {
            return axios({
                url: "/v1/automation/detail",
                method: "post",
                data
            })
        },

        /**
         * 日志
         * @param {*} data 
         * @returns 
         */
        log: (data) => {
            return axios({
                url: "/v1/automation/log/list",
                method: "post",
                data
            })
        }
    }
}