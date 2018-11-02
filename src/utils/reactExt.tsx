import * as React from 'react';
import { message, notification } from 'antd';

// 这里用到ts的泛型来灵活化state和props的interface

export class ComponentExt<Props= {}, State= {}> extends React.Component<Props, State> {
  $message = message
  $notification = notification
}
