import { LightningElement, wire } from 'lwc';
import getPlacedStudents from '@salesforce/apex/StudentController.getPlacedStudents';

export default class PlacedStudents extends LightningElement {

    @wire(getPlacedStudents)
    students;

}