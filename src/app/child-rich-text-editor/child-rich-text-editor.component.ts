import { Component, Input, Output, NgZone, ViewChild, ElementRef, EventEmitter } from '@angular/core';

import 'tinymce';
import 'tinymce/themes/modern';


import 'tinymce/plugins/lists';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/image';
import 'tinymce/plugins/insertdatetime';

import 'tinymce/plugins/link';
import 'tinymce/plugins/media';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/textpattern';
import 'tinymce/plugins/toc';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';


declare var $: any;

declare var tinymce: any;

@Component({
  selector: 'app-child-rich-text-editor',
  templateUrl: './child-rich-text-editor.component.html',
  styleUrls: ['./child-rich-text-editor.component.css']
})
export class ChildRichTextEditorComponent {

  @Input() content: string;
  @Output() sender = new EventEmitter();

  willBeSendContent;
  sendToRichEditor(){
    if(this.willBeSendContent){
      this.sender.emit(this.willBeSendContent)
    }
  }

  constructor(private zone: NgZone) {}
  
  /* Child Rich Text Editor */
  @Input() elementId: String;
  @ViewChild('textArea') textArea: ElementRef;
  editor: any;
  value: string="";
  onChange = (_: any) => { };
  writeValue(value: any): void {
    this.value = value;
    if (this.editor) {
      this.editor.setContent(value);
    }
  }
  ngAfterViewInit() {
    tinymce.init({
      selector:"textarea#richEditorTwo",
      plugins: "lists save advlist autolink autoresize charmap code hr image insertdatetime link media paste preview searchreplace table textpattern toc visualblocks visualchars wordcount",//emoticons quickbars
			toolbar: "code save preview | undo redo | formatselect | fontselect | fontsizeselect | bold italic underline strikethrough backcolor | subscript superscript | numlist bullist | alignleft aligncenter alignright alignjustify | outdent indent | paste searchreplace | toc link image media charmap insertdatetime emoticons hr | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | removeformat",
      save_onsavecallback: function () { tinymce.activeEditor.execCommand('mceSave'); },
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.willBeSendContent = content
          // console.log(Zone.current.name);
          this.zone.run(() => this.onChange(content))
        });
      },
      image_advtab: true,
			insertdatetime_element: true,
			 media_scripts: [
			 {filter: 'platform.twitter.com'},
			 {filter: 's.imgur.com'},
			 {filter: 'instagram.com'},
			 {filter: 'https://platform.twitter.com/widgets.js'},
		   ],
			 browser_spellcheck: true,
			 contextmenu: false,
			 file_picker_callback: function(callback, value, meta) {
			  if (meta.filetype == 'image') {
				$('#upload').trigger('click');
				$('#upload').on('change', function() {
				  var file = this.files[0];
				  var reader = new FileReader();
				  reader.onload = function(e) {
					callback(e.target.result, {
					  alt: ''
					});
				  };
				  reader.readAsDataURL(file);
				});
			  }
			}
    });
  }
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { }
  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
