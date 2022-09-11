"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getCourse() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://firstact-api.thinc.in.th/courses");
        const data = yield response.json();
        const courses = data.courses;
        return courses;
    });
}
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const courses = yield getCourse();
        for (const course of courses) {
            const section = document.createElement("section");
            section.classList.add("course");
            section.innerHTML = `<h3>${course.courseNo} ${course.abbrName}</h3>
                         <h4>จำนวนหน่วยกิต</h4>
                         <p>${course.credit} หน่วยกิต</p>
                         <h4>ภาควิชา/กลุ่มวิชา/สาขาวิชา</h4>
                         <p>${course.department}</p>
                         <h4>ประเภท GenEd</h4>
                         <p>${course.genEdType === "NO"
                ? "ไม่ใช่ GenEd"
                : course.genEdType}</p>
                        `;
            const container = document.getElementById("courses-container");
            container === null || container === void 0 ? void 0 : container.appendChild(section);
        }
    });
}
init();
