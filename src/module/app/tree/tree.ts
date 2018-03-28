import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';

import { TreeData } from "./tree-data";
@Component({
    selector: 'app-tree',
    templateUrl: './tree.html',
    styleUrls: ['./tree.css']
})
export class TreeComponent implements OnInit {
    constructor() { }
    ngOnInit() { }

    @Input() treeData: Array<TreeData> = [];

}