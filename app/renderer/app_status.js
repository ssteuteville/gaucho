"use strict";

const EventEmitter = require('events');

const TasksHandler = require('./tasks_handler');
const version = require('../../package.json').version;
const AppConfigStatus = require('./app_config_status');

module.exports = {
    editMode: false,
    activeSuite: 0,
    events: new EventEmitter(),
    toggleEdit() {
        this.editMode = !this.editMode;
        TasksHandler.saveTasks();
    },
    config: new AppConfigStatus(),
    maxSuites: 6,
    maxTasksPerSuite: 8,
    totalTasks: 0,
    runningTasks: 0,
    version: version,
    contextMenuEl: null,
    openContextMenu: function (el, event) {
        if (this.contextMenuEl !== null) {
            this.contextMenuEl.style.display = 'none';
        }
        this.contextMenuEl = el;
        this.contextMenuEl.style.left = `${event.clientX}px`;
        this.contextMenuEl.style.top = `${event.clientY}px`;
        this.contextMenuEl.style.display = "block";
        event.preventDefault();
    }
};
